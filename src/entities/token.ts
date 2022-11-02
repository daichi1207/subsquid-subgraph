import { decodeHex, EvmLogHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import { Big as BigDecimal } from 'big.js';
import { ethers } from 'ethers';
import * as ERC20 from '../abi/erc20';
import { Token } from '../model';

export async function getOrCreateToken(
    ctx: EvmLogHandlerContext<Store>,
    address: string
): Promise<Token> {
    let token = await ctx.store.get(Token, address);

    if (token == null) {
        const erc20 = new ERC20.Contract(ctx, address);

        const name = await erc20.name();
        const symbol = await erc20.symbol();
        const decimals = await erc20.decimals();

        token = new Token({ id: address });
        token.name = name;
        token.symbol = symbol;
        token.decimals = BigInt(decimals);
        token.totalSupply = BigInt(0);
        token.tradeVolume = BigDecimal('0');
        token.tradeVolumeUSD = BigDecimal('0');
        token.untrackedVolumeUSD = BigDecimal('0');
        token.txCount = BigInt(1);
        token.totalLiquidity = BigDecimal('0');
        token.tokenDayData = [];
        token.pairDayDataBase = [];
        token.pairDayDataQuote = [];
        token.pairBase = [];
        token.pairQuote = [];

        await ctx.store.save(token);
    }

    return token;
}
// ethersjs timeout handling

async function timeout<T>(res: Promise<T>, seconds = 30): Promise<T> {
    return new Promise((resolve, reject) => {
        let timer: any = setTimeout(() => {
            timer = undefined;
            reject(new Error(`Request timed out in ${seconds} seconds`));
        }, seconds * 1000);

        res.finally(() => {
            if (timer != null) {
                clearTimeout(timer);
            }
        }).then(resolve, reject);
    });
}

async function retry<T>(promiseFn: () => Promise<T>, attempts = 3): Promise<T> {
    for (let i = 0; i < attempts; i += 1) {
        try {
            return await promiseFn();
        } catch (err) {
            console.log(err);
        }
    }
    throw new Error(`Error after ${attempts} attempts`);
}
