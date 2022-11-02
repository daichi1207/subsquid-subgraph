import { Store } from '@subsquid/typeorm-store';
import { Big as BigDecimal } from 'big.js';
import { ethers } from 'ethers';
import * as pancakePair from '../abi/PancakePair';
import { Token } from '../model';

export const CHAIN_NODE = 'wss://astar.public.blastapi.io';

interface TokenInfo {
    ethersContract: ethers.Contract;
    tokenModel: Token;
}

export const tokenMapping: Map<string, TokenInfo> = new Map<
    string,
    TokenInfo
>();

export const ARSW_WASTR_LP = new ethers.Contract(
    '0x50497e7181eb9e8ccd70a9c44fb997742149482a'.toLowerCase(),
    pancakePair.abi,
    new ethers.providers.WebSocketProvider(CHAIN_NODE)
);

tokenMapping.set(ARSW_WASTR_LP.address, {
    ethersContract: ARSW_WASTR_LP,
    tokenModel: {
        id: ARSW_WASTR_LP.address,
        name: 'ARSW/WASTR-LP',
        symbol: 'ARSW/WASTR-LP',
        decimals: 18n,
        totalSupply: 0n,
        tradeVolume: BigDecimal(0),
        tradeVolumeUSD: BigDecimal(0),
        untrackedVolumeUSD: BigDecimal(0),
        txCount: 0n,
        totalLiquidity: BigDecimal(0),
        derivedETH: BigDecimal(0),
        tokenDayData: [],
        pairDayDataBase: [],
        pairDayDataQuote: [],
        pairBase: [],
        pairQuote: [],
    },
});

export function createTokenEntity(address: string): Token {
    return new Token(tokenMapping.get(address)?.tokenModel);
}
const tokenAddresstoModel: Map<string, Token> = new Map<string, Token>();

export async function getTokenEntity(
    store: Store,
    address: string
): Promise<Token | undefined> {
    if (tokenAddresstoModel.get(address) == null) {
        let contractEntity = await store.get(Token, address);
        if (contractEntity == null) {
            contractEntity = createTokenEntity(address);
            await store.insert(contractEntity);
            tokenAddresstoModel.set(address, contractEntity);
        }
    }

    return tokenAddresstoModel.get(address);
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
