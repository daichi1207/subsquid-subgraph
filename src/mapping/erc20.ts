import { Big as BigDecimal } from 'big.js';
import { Mint, Token, Transaction } from '../model';
import { getOrCreateTransaction, getOrCreatePair } from '../entities/swap';
import * as pancakePair from '../abi/PancakePair';

import {
    decodeHex,
    EvmLogHandlerContext,
    toHex,
} from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import { toSeconds } from './helper';

// handle transfers here and update tvls
export async function handleTransfer(
    ctx: EvmLogHandlerContext<Store>
): Promise<void> {}
