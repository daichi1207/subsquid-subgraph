import { decodeHex, EvmLogHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import * as ERC20 from '../abi/erc20';
import { ZERO_BD, ZERO_BI } from '../mapping/helper';
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
        let totalSupply = (await erc20.totalSupply()).toBigInt();

        token = new Token({ id: address });
        token.name = name;
        token.symbol = symbol;
        token.decimals = BigInt(decimals);
        token.totalSupply = totalSupply;
        token.tradeVolume = ZERO_BD;
        token.tradeVolumeUSD = ZERO_BD;
        token.untrackedVolumeUSD = ZERO_BD;
        token.txCount = BigInt(0);
        token.totalLiquidity = ZERO_BD;
        token.tokenDayData = [];
        token.pairDayDataBase = [];
        token.pairDayDataQuote = [];
        token.pairBase = [];
        token.pairQuote = [];
        await ctx.store.save(token);
    }

    return token;
}
