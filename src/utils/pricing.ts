import { ZERO_BD, ONE_BD } from '../consts'
import { getOrCreateToken } from '../entities/token'
import { Pair } from '../model'
import { BaseMapper, EntityMap } from '../mappers/baseMapper'
import assert from 'assert'
import { BigDecimal } from '@subsquid/big-decimal'

export const WASTR_ADDRESS = '0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720'.toLowerCase()
export const WASTR_USDC_ADDRESS = '0xBB1290c1829007F440C771b37718FAbf309cd527'.toLowerCase()
export const USDC = '0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98'.toLowerCase()

export const WHITELIST: string[] = [
    '0xDe2578Edec4669BA7F41c5d5D2386300bcEA4678'.toLowerCase(), //ARSW
    '0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720'.toLowerCase(), //WASTR
    '0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98'.toLowerCase(), //USDC
]

export async function getEthPriceInUSD(this: BaseMapper<unknown>, entities: EntityMap): Promise<BigDecimal> {
    console.log(entities)
    let usdcPair = entities.get(Pair).get(WASTR_USDC_ADDRESS)
    if (usdcPair == null) {
        usdcPair = await this.ctx.store.get(Pair, WASTR_USDC_ADDRESS)
        console.log(usdcPair)
        assert(usdcPair != null)
        entities.get(Pair).set(usdcPair.id, usdcPair)
    }

    // console.log(`usdcPair ${usdcPair.token0Price}, ${usdcPair.token1Price}`)
    return usdcPair.token0Id === USDC ? usdcPair.token0Price : usdcPair.token1Price
}

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal(3000)

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal(5)

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (plus stablecoin estimates)
 **/
export async function findEthPerToken(
    this: BaseMapper<unknown>,
    entities: EntityMap,
    tokenId: string
): Promise<BigDecimal> {
    if (tokenId === WASTR_ADDRESS) return ONE_BD

    // loop through whitelist and check if paired with any
    for (let i = 0; i < WHITELIST.length; i++) {
        let pair = [...entities.get(Pair).values()].find((p) => {
            return (
                (p.token0Id === WHITELIST[i] && p.token1Id === tokenId) ||
                (p.token1Id === WHITELIST[i] && p.token0Id === tokenId)
            )
        })
        if (pair == null) {
            pair = await this.ctx.store.get(Pair, {
                where: [
                    {
                        token0Id: WHITELIST[i],
                        token1Id: tokenId,
                    },
                    {
                        token0Id: tokenId,
                        token1Id: WHITELIST[i],
                    },
                ],
            })
            if (pair != null) {
                entities.get(Pair).set(pair.id, pair)
            } else {
                continue
            }
        }

        if (pair.reserveETH.lte(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) continue

        if (pair.token0Id === tokenId) {
            const token1 = await getOrCreateToken.call(this, entities, pair.token1Id)
            return pair.token1Price.mul(token1.derivedETH) // return token1 per our token * Eth per token 1
        }
        if (pair.token1Id === tokenId) {
            const token0 = await getOrCreateToken.call(this, entities, pair.token0Id)
            return pair.token0Price.mul(token0.derivedETH) // return token0 per our token * ETH per token 0
        }
    }
    return ZERO_BD // nothing was found return 0
}
