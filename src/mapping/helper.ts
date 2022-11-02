import { decodeHex, EvmLogHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import * as ERC20 from '../abi/erc20';

export const CHAIN_NODE = 'wss://astar.public.blastapi.io';

export const FactoryAddress = '0xa9473608514457b4bf083f9045fa63ae5810a03e';
export const ARSWToken = '0xDe2578Edec4669BA7F41c5d5D2386300bcEA4678';

export function toSeconds(timestamp: number) {
    return Math.floor(timestamp / 1000);
}

export function fetchTokenTotalSupply(tokenAddress: Address): BigInt {
    let contract = ERC20.bind(tokenAddress);
    let totalSupplyValue = null;
    let totalSupplyResult = contract.try_totalSupply();
    if (!totalSupplyResult.reverted) {
        totalSupplyValue = totalSupplyResult as i32;
    }
    return BigInt.fromI32(totalSupplyValue as i32);
}
