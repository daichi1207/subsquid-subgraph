import {
    AddLiquidityEventData,
    RemoveLiquidityEventData,
    SwapEvent,
} from '../model';
import { getOrCreateSwap } from '../entities/swap';
import * as pancakePair from '../abi/PancakePair';
import { Big as BigDecimal } from 'big.js';

import {
    decodeHex,
    EvmLogHandlerContext,
    toHex,
} from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';

export async function handleAddLiquidity(
    ctx: EvmLogHandlerContext<Store>
): Promise<void> {
    let swap = await getOrCreateSwap(ctx, ctx.event.args.address);
    let balance = await getBalancesSwap(
        ctx,
        ctx.event.args.address,
        swap.numTokens
    );

    let log;
    await ctx.store.save(log);
}
export async function handleRemoveLiquidity(ctx: EvmLogHandlerContext<Store>) {}
