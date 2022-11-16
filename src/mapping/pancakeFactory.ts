import { Big as BigDecimal } from 'big.js';
import { EvmLogHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import { Token, Pair, ArthswapFactory } from '../model';
import * as pancakeFactory from '../abi/PancakeFactory';
import { getOrCreateToken } from '../entities/token';
import { getOrCreateArthswapFactory } from '../entities/system';
import { ONE_BI, toSeconds, ZERO_BD } from './helper';

export async function handlePairCreated(
    ctx: EvmLogHandlerContext<Store>
): Promise<void> {
    let factory = await getOrCreateArthswapFactory(ctx);

    const event = pancakeFactory.events[
        'PairCreated(address,address,address,uint256)'
    ].decode(ctx.event.args);
    factory.pairCount += 1;
    await ctx.store.save(factory);

    let pair = new Pair({ id: event.pair });
    let token0 = await getOrCreateToken(ctx, event.token0);
    let token1 = await getOrCreateToken(ctx, event.token1);
    pair.token0 = token0;
    pair.token1 = token1;
    pair.reserve0 = ZERO_BD;
    pair.reserve1 = ZERO_BD;
    pair.totalSupply = ZERO_BD;
    pair.reserveETH = ZERO_BD;
    pair.reserveUSD = ZERO_BD;
    pair.trackedReserveETH = ZERO_BD;
    pair.token0Price = ZERO_BD;
    pair.token1Price = ZERO_BD;
    pair.volumeToken0 = ZERO_BD;
    pair.volumeToken1 = ZERO_BD;
    pair.volumeUSD = ZERO_BD;
    pair.untrackedVolumeUSD = ZERO_BD;
    pair.txCount = ONE_BI;
    pair.createdAtTimestamp = BigInt(toSeconds(ctx.block.timestamp));
    pair.createdAtBlockNumber = BigInt(ctx.block.height);
}
