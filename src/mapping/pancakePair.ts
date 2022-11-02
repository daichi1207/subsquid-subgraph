import { Big as BigDecimal } from 'big.js';
import { Mint, Token, Transaction } from '../model';
import { getOrCreateTransaction, getOrCreatePair } from '../entities/swap';
import * as pancakePair from '../abi/PancakePair';

import {
    decodeHex,
    EvmLogHandlerContext,
    toHex,
} from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import { toSeconds } from './helper';

export async function handleAddLiquidity(
    ctx: EvmLogHandlerContext<Store>
): Promise<void> {
    let transaction = await getOrCreateTransaction(ctx, ctx.event.evmTxHash);
    let pair = await getOrCreatePair(ctx, ctx.event.args.address);

    // // update TVL
    // let tokens = swap.tokens
    // let tvl: BigDecimal = BigDecimal('0')
    // for (let i = 0; i < swap.tokens.length; i++) {
    //     let token = await getOrCreateToken(ctx, toHex(tokens[i].address))
    //     if (token !== null) {
    //         let balance = balances[i]
    //         let balanceDecimal: BigDecimal = BigDecimal(balance.toString()).div(Math.pow(10, Number(token.decimals)))
    //         tvl = tvl.plus(balanceDecimal)
    //     }
    // }
    // swap.tvl = tvl.toFixed()

    // let dailyTvl = await getDailyPoolTvl(ctx, swap, BigInt(toSeconds(ctx.block.timestamp)))
    // dailyTvl.tvl = tvl.toFixed()
    // await ctx.store.save(dailyTvl)

    // // update APY
    // let dailyVolume = await getDailyTradeVolume(ctx, swap, BigInt(toSeconds(ctx.block.timestamp)))
    // let dailyTotalSwapFees = BigDecimal(dailyVolume.volume).times(swap.swapFee.toString()).div('10000000000')
    // let apy: BigDecimal = BigDecimal('0')
    // if (!tvl.eq(BigDecimal('0'))) {
    //     apy = dailyTotalSwapFees.div(tvl).times('365')
    // }
    // swap.apy = apy.toFixed()

    // await ctx.store.save(swap)

    const event = pancakePair.events['Mint(address,uint256,uint256)'].decode(
        ctx.event.args
    );

    let log = new Mint({ id: 'mint-' + ctx.event.evmTxHash });
    log.pair = pair;
    log.transaction = new Transaction();
    log.transaction.blockNumber = BigInt(ctx.block.height);
    log.transaction.timestamp = BigInt(toSeconds(ctx.block.timestamp));

    await ctx.store.save(log);
}

export async function handleRemoveLiquidity(
    ctx: EvmLogHandlerContext<Store>
): Promise<void> {}
