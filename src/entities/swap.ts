import { EvmLogHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import * as pancakeRouter from '../abi/pancakeRouter';
import { Pair, Swap, Transaction } from '../model';

export async function getOrCreateTransaction(
    ctx: EvmLogHandlerContext<Store>,
    txHash: string
) {
    let transaction = await ctx.store.get(Transaction, txHash);

    if (transaction == null) {
        transaction = new Transaction({ id: txHash });
        transaction.blockNumber = BigInt(ctx.block.height);
        transaction.timestamp = BigInt(ctx.block.timestamp);
        transaction.mints = [];
        transaction.burns = [];
        transaction.swaps = [];
    }
}

export async function getOrCreatePair(
    ctx: EvmLogHandlerContext<Store>,
    address: string
): Promise<Pair> {
    const pair = await ctx.store.get(Pair, address);

    if (pair == null) {
        // pair = new Pair({ id: address });
        // pair;
    }
    return pair;
}
