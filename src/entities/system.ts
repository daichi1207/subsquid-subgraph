import { decodeHex, EvmLogHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import { Big as BigDecimal } from 'big.js';
import { FactoryAddress } from '../mapping/helper';
import { ArthswapFactory } from '../model';

export async function getArthswapFactory(
    ctx: EvmLogHandlerContext<Store>
): Promise<ArthswapFactory> {
    let factory = await ctx.store.get(ArthswapFactory, FactoryAddress);

    if (factory == null) {
        factory = new ArthswapFactory({ id: FactoryAddress });

        factory.pairCount = 0;
        factory.totalVolumeUSD = BigDecimal('0');
        factory.totalVolumeETH = BigDecimal('0');

        factory.untrackedVolumeUSD = BigDecimal('0');

        factory.totalLiquidityUSD = BigDecimal('0');
        factory.totalLiquidityETH = BigDecimal('0');

        factory.txCount = BigInt('0');
    }

    factory.txCount += 1n;

    return factory;
}

export function toSeconds(timestamp: number) {
    return Math.floor(timestamp / 1000);
}
