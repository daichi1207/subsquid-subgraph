import { EvmLogHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import * as pancakeRouter from '../abi/pancakeRouter';
import { Swap } from '../model';

export async function getOrCreateSwap(
    ctx: EvmLogHandlerContext<Store>,
    address: string
) {
    // let swap = await ctx.store.get(Swap, address);
}

export async function getBalancesSwap(
    ctx: EvmLogHandlerContext<Store>,
    swap: string,
    N_COINS: number
): Promise<bigint[]> {
    let swapContract = new pancakeRouter.Contract(ctx, swap);
    let balances: bigint[] = new Array(N_COINS);

    for (let i =0 ; i < N_COINS; ++i){
        balances[i] = await swapContract.


    }
}
