import { decodeHex, EvmLogHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import { FactoryAddress, ZERO_BD } from '../mapping/helper';
import { ArthswapFactory } from '../model';

export async function getOrCreateArthswapFactory(
    ctx: EvmLogHandlerContext<Store>
): Promise<ArthswapFactory> {
    let factory = await ctx.store.get(ArthswapFactory, FactoryAddress);

    if (factory == null) {
        factory = new ArthswapFactory({ id: FactoryAddress });

        factory.pairCount = 0;
        factory.totalVolumeUSD = ZERO_BD;
        factory.totalVolumeETH = ZERO_BD;

        factory.untrackedVolumeUSD = ZERO_BD;

        factory.totalLiquidityUSD = ZERO_BD;
        factory.totalLiquidityETH = ZERO_BD;

        factory.txCount = BigInt('0');
    }

    factory.txCount += 1n;

    return factory;
}
