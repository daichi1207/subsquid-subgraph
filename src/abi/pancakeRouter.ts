/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import * as ethers from 'ethers';
import assert from 'assert';

export const abi = new ethers.utils.Interface(getJsonAbi());

export interface EvmLog {
    data: string;
    topics: string[];
}

function decodeEvent(signature: string, data: EvmLog): any {
    return abi.decodeEventLog(
        abi.getEvent(signature),
        data.data || '',
        data.topics
    );
}

export const events = {};

export type AddLiquidity0Function = [
    tokenA: string,
    tokenB: string,
    amountADesired: ethers.BigNumber,
    amountBDesired: ethers.BigNumber,
    amountAMin: ethers.BigNumber,
    amountBMin: ethers.BigNumber,
    to: string,
    deadline: ethers.BigNumber
] & {
    tokenA: string;
    tokenB: string;
    amountADesired: ethers.BigNumber;
    amountBDesired: ethers.BigNumber;
    amountAMin: ethers.BigNumber;
    amountBMin: ethers.BigNumber;
    to: string;
    deadline: ethers.BigNumber;
};

export type AddLiquidityETH0Function = [
    token: string,
    amountTokenDesired: ethers.BigNumber,
    amountTokenMin: ethers.BigNumber,
    amountETHMin: ethers.BigNumber,
    to: string,
    deadline: ethers.BigNumber
] & {
    token: string;
    amountTokenDesired: ethers.BigNumber;
    amountTokenMin: ethers.BigNumber;
    amountETHMin: ethers.BigNumber;
    to: string;
    deadline: ethers.BigNumber;
};

export type RemoveLiquidity0Function = [
    tokenA: string,
    tokenB: string,
    liquidity: ethers.BigNumber,
    amountAMin: ethers.BigNumber,
    amountBMin: ethers.BigNumber,
    to: string,
    deadline: ethers.BigNumber
] & {
    tokenA: string;
    tokenB: string;
    liquidity: ethers.BigNumber;
    amountAMin: ethers.BigNumber;
    amountBMin: ethers.BigNumber;
    to: string;
    deadline: ethers.BigNumber;
};

export type RemoveLiquidityETH0Function = [
    token: string,
    liquidity: ethers.BigNumber,
    amountTokenMin: ethers.BigNumber,
    amountETHMin: ethers.BigNumber,
    to: string,
    deadline: ethers.BigNumber
] & {
    token: string;
    liquidity: ethers.BigNumber;
    amountTokenMin: ethers.BigNumber;
    amountETHMin: ethers.BigNumber;
    to: string;
    deadline: ethers.BigNumber;
};

export type RemoveLiquidityETHSupportingFeeOnTransferTokens0Function = [
    token: string,
    liquidity: ethers.BigNumber,
    amountTokenMin: ethers.BigNumber,
    amountETHMin: ethers.BigNumber,
    to: string,
    deadline: ethers.BigNumber
] & {
    token: string;
    liquidity: ethers.BigNumber;
    amountTokenMin: ethers.BigNumber;
    amountETHMin: ethers.BigNumber;
    to: string;
    deadline: ethers.BigNumber;
};

export type RemoveLiquidityETHWithPermit0Function = [
    token: string,
    liquidity: ethers.BigNumber,
    amountTokenMin: ethers.BigNumber,
    amountETHMin: ethers.BigNumber,
    to: string,
    deadline: ethers.BigNumber,
    approveMax: boolean,
    v: number,
    r: string,
    s: string
] & {
    token: string;
    liquidity: ethers.BigNumber;
    amountTokenMin: ethers.BigNumber;
    amountETHMin: ethers.BigNumber;
    to: string;
    deadline: ethers.BigNumber;
    approveMax: boolean;
    v: number;
    r: string;
    s: string;
};

export type RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokens0Function =
    [
        token: string,
        liquidity: ethers.BigNumber,
        amountTokenMin: ethers.BigNumber,
        amountETHMin: ethers.BigNumber,
        to: string,
        deadline: ethers.BigNumber,
        approveMax: boolean,
        v: number,
        r: string,
        s: string
    ] & {
        token: string;
        liquidity: ethers.BigNumber;
        amountTokenMin: ethers.BigNumber;
        amountETHMin: ethers.BigNumber;
        to: string;
        deadline: ethers.BigNumber;
        approveMax: boolean;
        v: number;
        r: string;
        s: string;
    };

export type RemoveLiquidityWithPermit0Function = [
    tokenA: string,
    tokenB: string,
    liquidity: ethers.BigNumber,
    amountAMin: ethers.BigNumber,
    amountBMin: ethers.BigNumber,
    to: string,
    deadline: ethers.BigNumber,
    approveMax: boolean,
    v: number,
    r: string,
    s: string
] & {
    tokenA: string;
    tokenB: string;
    liquidity: ethers.BigNumber;
    amountAMin: ethers.BigNumber;
    amountBMin: ethers.BigNumber;
    to: string;
    deadline: ethers.BigNumber;
    approveMax: boolean;
    v: number;
    r: string;
    s: string;
};

export type SwapETHForExactTokens0Function = [
    amountOut: ethers.BigNumber,
    path: Array<string>,
    to: string,
    deadline: ethers.BigNumber
] & {
    amountOut: ethers.BigNumber;
    path: Array<string>;
    to: string;
    deadline: ethers.BigNumber;
};

export type SwapExactETHForTokens0Function = [
    amountOutMin: ethers.BigNumber,
    path: Array<string>,
    to: string,
    deadline: ethers.BigNumber
] & {
    amountOutMin: ethers.BigNumber;
    path: Array<string>;
    to: string;
    deadline: ethers.BigNumber;
};

export type SwapExactETHForTokensSupportingFeeOnTransferTokens0Function = [
    amountOutMin: ethers.BigNumber,
    path: Array<string>,
    to: string,
    deadline: ethers.BigNumber
] & {
    amountOutMin: ethers.BigNumber;
    path: Array<string>;
    to: string;
    deadline: ethers.BigNumber;
};

export type SwapExactTokensForETH0Function = [
    amountIn: ethers.BigNumber,
    amountOutMin: ethers.BigNumber,
    path: Array<string>,
    to: string,
    deadline: ethers.BigNumber
] & {
    amountIn: ethers.BigNumber;
    amountOutMin: ethers.BigNumber;
    path: Array<string>;
    to: string;
    deadline: ethers.BigNumber;
};

export type SwapExactTokensForETHSupportingFeeOnTransferTokens0Function = [
    amountIn: ethers.BigNumber,
    amountOutMin: ethers.BigNumber,
    path: Array<string>,
    to: string,
    deadline: ethers.BigNumber
] & {
    amountIn: ethers.BigNumber;
    amountOutMin: ethers.BigNumber;
    path: Array<string>;
    to: string;
    deadline: ethers.BigNumber;
};

export type SwapExactTokensForTokens0Function = [
    amountIn: ethers.BigNumber,
    amountOutMin: ethers.BigNumber,
    path: Array<string>,
    to: string,
    deadline: ethers.BigNumber
] & {
    amountIn: ethers.BigNumber;
    amountOutMin: ethers.BigNumber;
    path: Array<string>;
    to: string;
    deadline: ethers.BigNumber;
};

export type SwapExactTokensForTokensSupportingFeeOnTransferTokens0Function = [
    amountIn: ethers.BigNumber,
    amountOutMin: ethers.BigNumber,
    path: Array<string>,
    to: string,
    deadline: ethers.BigNumber
] & {
    amountIn: ethers.BigNumber;
    amountOutMin: ethers.BigNumber;
    path: Array<string>;
    to: string;
    deadline: ethers.BigNumber;
};

export type SwapTokensForExactETH0Function = [
    amountOut: ethers.BigNumber,
    amountInMax: ethers.BigNumber,
    path: Array<string>,
    to: string,
    deadline: ethers.BigNumber
] & {
    amountOut: ethers.BigNumber;
    amountInMax: ethers.BigNumber;
    path: Array<string>;
    to: string;
    deadline: ethers.BigNumber;
};

export type SwapTokensForExactTokens0Function = [
    amountOut: ethers.BigNumber,
    amountInMax: ethers.BigNumber,
    path: Array<string>,
    to: string,
    deadline: ethers.BigNumber
] & {
    amountOut: ethers.BigNumber;
    amountInMax: ethers.BigNumber;
    path: Array<string>;
    to: string;
    deadline: ethers.BigNumber;
};

function decodeFunction(data: string): any {
    return abi.decodeFunctionData(data.slice(0, 10), data);
}

export const functions = {
    'addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)':
        {
            sighash: abi.getSighash(
                'addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)'
            ),
            decode(input: string): AddLiquidity0Function {
                return decodeFunction(input);
            },
        },
    'addLiquidityETH(address,uint256,uint256,uint256,address,uint256)': {
        sighash: abi.getSighash(
            'addLiquidityETH(address,uint256,uint256,uint256,address,uint256)'
        ),
        decode(input: string): AddLiquidityETH0Function {
            return decodeFunction(input);
        },
    },
    'removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)':
        {
            sighash: abi.getSighash(
                'removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)'
            ),
            decode(input: string): RemoveLiquidity0Function {
                return decodeFunction(input);
            },
        },
    'removeLiquidityETH(address,uint256,uint256,uint256,address,uint256)': {
        sighash: abi.getSighash(
            'removeLiquidityETH(address,uint256,uint256,uint256,address,uint256)'
        ),
        decode(input: string): RemoveLiquidityETH0Function {
            return decodeFunction(input);
        },
    },
    'removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256)':
        {
            sighash: abi.getSighash(
                'removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256)'
            ),
            decode(
                input: string
            ): RemoveLiquidityETHSupportingFeeOnTransferTokens0Function {
                return decodeFunction(input);
            },
        },
    'removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)':
        {
            sighash: abi.getSighash(
                'removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)'
            ),
            decode(input: string): RemoveLiquidityETHWithPermit0Function {
                return decodeFunction(input);
            },
        },
    'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)':
        {
            sighash: abi.getSighash(
                'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)'
            ),
            decode(
                input: string
            ): RemoveLiquidityETHWithPermitSupportingFeeOnTransferTokens0Function {
                return decodeFunction(input);
            },
        },
    'removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)':
        {
            sighash: abi.getSighash(
                'removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)'
            ),
            decode(input: string): RemoveLiquidityWithPermit0Function {
                return decodeFunction(input);
            },
        },
    'swapETHForExactTokens(uint256,address[],address,uint256)': {
        sighash: abi.getSighash(
            'swapETHForExactTokens(uint256,address[],address,uint256)'
        ),
        decode(input: string): SwapETHForExactTokens0Function {
            return decodeFunction(input);
        },
    },
    'swapExactETHForTokens(uint256,address[],address,uint256)': {
        sighash: abi.getSighash(
            'swapExactETHForTokens(uint256,address[],address,uint256)'
        ),
        decode(input: string): SwapExactETHForTokens0Function {
            return decodeFunction(input);
        },
    },
    'swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256)':
        {
            sighash: abi.getSighash(
                'swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256)'
            ),
            decode(
                input: string
            ): SwapExactETHForTokensSupportingFeeOnTransferTokens0Function {
                return decodeFunction(input);
            },
        },
    'swapExactTokensForETH(uint256,uint256,address[],address,uint256)': {
        sighash: abi.getSighash(
            'swapExactTokensForETH(uint256,uint256,address[],address,uint256)'
        ),
        decode(input: string): SwapExactTokensForETH0Function {
            return decodeFunction(input);
        },
    },
    'swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)':
        {
            sighash: abi.getSighash(
                'swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)'
            ),
            decode(
                input: string
            ): SwapExactTokensForETHSupportingFeeOnTransferTokens0Function {
                return decodeFunction(input);
            },
        },
    'swapExactTokensForTokens(uint256,uint256,address[],address,uint256)': {
        sighash: abi.getSighash(
            'swapExactTokensForTokens(uint256,uint256,address[],address,uint256)'
        ),
        decode(input: string): SwapExactTokensForTokens0Function {
            return decodeFunction(input);
        },
    },
    'swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)':
        {
            sighash: abi.getSighash(
                'swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)'
            ),
            decode(
                input: string
            ): SwapExactTokensForTokensSupportingFeeOnTransferTokens0Function {
                return decodeFunction(input);
            },
        },
    'swapTokensForExactETH(uint256,uint256,address[],address,uint256)': {
        sighash: abi.getSighash(
            'swapTokensForExactETH(uint256,uint256,address[],address,uint256)'
        ),
        decode(input: string): SwapTokensForExactETH0Function {
            return decodeFunction(input);
        },
    },
    'swapTokensForExactTokens(uint256,uint256,address[],address,uint256)': {
        sighash: abi.getSighash(
            'swapTokensForExactTokens(uint256,uint256,address[],address,uint256)'
        ),
        decode(input: string): SwapTokensForExactTokens0Function {
            return decodeFunction(input);
        },
    },
};

interface ChainContext {
    _chain: Chain;
}

interface BlockContext {
    _chain: Chain;
    block: Block;
}

interface Block {
    height: number;
}

interface Chain {
    client: {
        call: <T = any>(method: string, params?: unknown[]) => Promise<T>;
    };
}

export class Contract {
    private readonly _chain: Chain;

    private readonly blockHeight: number;

    readonly address: string;

    constructor(ctx: BlockContext, address: string);
    constructor(ctx: ChainContext, block: Block, address: string);
    constructor(
        ctx: BlockContext,
        blockOrAddress: Block | string,
        address?: string
    ) {
        this._chain = ctx._chain;
        if (typeof blockOrAddress === 'string') {
            this.blockHeight = ctx.block.height;
            this.address = ethers.utils.getAddress(blockOrAddress);
        } else {
            assert(address != null);
            this.blockHeight = blockOrAddress.height;
            this.address = ethers.utils.getAddress(address);
        }
    }

    async WETH(): Promise<string> {
        return this.call('WETH', []);
    }

    async factory(): Promise<string> {
        return this.call('factory', []);
    }

    async getAmountIn(
        amountOut: ethers.BigNumber,
        reserveIn: ethers.BigNumber,
        reserveOut: ethers.BigNumber
    ): Promise<ethers.BigNumber> {
        return this.call('getAmountIn', [amountOut, reserveIn, reserveOut]);
    }

    async getAmountOut(
        amountIn: ethers.BigNumber,
        reserveIn: ethers.BigNumber,
        reserveOut: ethers.BigNumber
    ): Promise<ethers.BigNumber> {
        return this.call('getAmountOut', [amountIn, reserveIn, reserveOut]);
    }

    async getAmountsIn(
        amountOut: ethers.BigNumber,
        path: Array<string>
    ): Promise<Array<ethers.BigNumber>> {
        return this.call('getAmountsIn', [amountOut, path]);
    }

    async getAmountsOut(
        amountIn: ethers.BigNumber,
        path: Array<string>
    ): Promise<Array<ethers.BigNumber>> {
        return this.call('getAmountsOut', [amountIn, path]);
    }

    async quote(
        amountA: ethers.BigNumber,
        reserveA: ethers.BigNumber,
        reserveB: ethers.BigNumber
    ): Promise<ethers.BigNumber> {
        return this.call('quote', [amountA, reserveA, reserveB]);
    }

    private async call(name: string, args: any[]): Promise<any> {
        const fragment = abi.getFunction(name);
        const data = abi.encodeFunctionData(fragment, args);
        const result = await this._chain.client.call('eth_call', [
            { to: this.address, data },
            this.blockHeight,
        ]);
        const decoded = abi.decodeFunctionResult(fragment, result);
        return decoded.length > 1 ? decoded : decoded[0];
    }
}

function getJsonAbi(): any {
    return [
        {
            type: 'constructor',
            stateMutability: 'nonpayable',
            inputs: [
                {
                    type: 'address',
                    name: '_factory',
                    internalType: 'address',
                },
                {
                    type: 'address',
                    name: '_WETH',
                    internalType: 'address',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'view',
            outputs: [
                {
                    type: 'address',
                    name: '',
                    internalType: 'address',
                },
            ],
            name: 'WETH',
            inputs: [],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountA',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountB',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'liquidity',
                    internalType: 'uint256',
                },
            ],
            name: 'addLiquidity',
            inputs: [
                {
                    type: 'address',
                    name: 'tokenA',
                    internalType: 'address',
                },
                {
                    type: 'address',
                    name: 'tokenB',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'amountADesired',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountBDesired',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountAMin',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountBMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'payable',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountToken',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountETH',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'liquidity',
                    internalType: 'uint256',
                },
            ],
            name: 'addLiquidityETH',
            inputs: [
                {
                    type: 'address',
                    name: 'token',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'amountTokenDesired',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountTokenMin',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountETHMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'view',
            outputs: [
                {
                    type: 'address',
                    name: '',
                    internalType: 'address',
                },
            ],
            name: 'factory',
            inputs: [],
        },
        {
            type: 'function',
            stateMutability: 'pure',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountIn',
                    internalType: 'uint256',
                },
            ],
            name: 'getAmountIn',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountOut',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'reserveIn',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'reserveOut',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'pure',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountOut',
                    internalType: 'uint256',
                },
            ],
            name: 'getAmountOut',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountIn',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'reserveIn',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'reserveOut',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'view',
            outputs: [
                {
                    type: 'uint256[]',
                    name: 'amounts',
                    internalType: 'uint256[]',
                },
            ],
            name: 'getAmountsIn',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountOut',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'view',
            outputs: [
                {
                    type: 'uint256[]',
                    name: 'amounts',
                    internalType: 'uint256[]',
                },
            ],
            name: 'getAmountsOut',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountIn',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'pure',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountB',
                    internalType: 'uint256',
                },
            ],
            name: 'quote',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountA',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'reserveA',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'reserveB',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountA',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountB',
                    internalType: 'uint256',
                },
            ],
            name: 'removeLiquidity',
            inputs: [
                {
                    type: 'address',
                    name: 'tokenA',
                    internalType: 'address',
                },
                {
                    type: 'address',
                    name: 'tokenB',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'liquidity',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountAMin',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountBMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountToken',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountETH',
                    internalType: 'uint256',
                },
            ],
            name: 'removeLiquidityETH',
            inputs: [
                {
                    type: 'address',
                    name: 'token',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'liquidity',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountTokenMin',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountETHMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountETH',
                    internalType: 'uint256',
                },
            ],
            name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
            inputs: [
                {
                    type: 'address',
                    name: 'token',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'liquidity',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountTokenMin',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountETHMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountToken',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountETH',
                    internalType: 'uint256',
                },
            ],
            name: 'removeLiquidityETHWithPermit',
            inputs: [
                {
                    type: 'address',
                    name: 'token',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'liquidity',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountTokenMin',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountETHMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
                {
                    type: 'bool',
                    name: 'approveMax',
                    internalType: 'bool',
                },
                {
                    type: 'uint8',
                    name: 'v',
                    internalType: 'uint8',
                },
                {
                    type: 'bytes32',
                    name: 'r',
                    internalType: 'bytes32',
                },
                {
                    type: 'bytes32',
                    name: 's',
                    internalType: 'bytes32',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountETH',
                    internalType: 'uint256',
                },
            ],
            name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
            inputs: [
                {
                    type: 'address',
                    name: 'token',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'liquidity',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountTokenMin',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountETHMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
                {
                    type: 'bool',
                    name: 'approveMax',
                    internalType: 'bool',
                },
                {
                    type: 'uint8',
                    name: 'v',
                    internalType: 'uint8',
                },
                {
                    type: 'bytes32',
                    name: 'r',
                    internalType: 'bytes32',
                },
                {
                    type: 'bytes32',
                    name: 's',
                    internalType: 'bytes32',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256',
                    name: 'amountA',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountB',
                    internalType: 'uint256',
                },
            ],
            name: 'removeLiquidityWithPermit',
            inputs: [
                {
                    type: 'address',
                    name: 'tokenA',
                    internalType: 'address',
                },
                {
                    type: 'address',
                    name: 'tokenB',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'liquidity',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountAMin',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountBMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
                {
                    type: 'bool',
                    name: 'approveMax',
                    internalType: 'bool',
                },
                {
                    type: 'uint8',
                    name: 'v',
                    internalType: 'uint8',
                },
                {
                    type: 'bytes32',
                    name: 'r',
                    internalType: 'bytes32',
                },
                {
                    type: 'bytes32',
                    name: 's',
                    internalType: 'bytes32',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'payable',
            outputs: [
                {
                    type: 'uint256[]',
                    name: 'amounts',
                    internalType: 'uint256[]',
                },
            ],
            name: 'swapETHForExactTokens',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountOut',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'payable',
            outputs: [
                {
                    type: 'uint256[]',
                    name: 'amounts',
                    internalType: 'uint256[]',
                },
            ],
            name: 'swapExactETHForTokens',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountOutMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'payable',
            outputs: [],
            name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountOutMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256[]',
                    name: 'amounts',
                    internalType: 'uint256[]',
                },
            ],
            name: 'swapExactTokensForETH',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountIn',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountOutMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [],
            name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountIn',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountOutMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256[]',
                    name: 'amounts',
                    internalType: 'uint256[]',
                },
            ],
            name: 'swapExactTokensForTokens',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountIn',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountOutMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [],
            name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountIn',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountOutMin',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256[]',
                    name: 'amounts',
                    internalType: 'uint256[]',
                },
            ],
            name: 'swapTokensForExactETH',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountOut',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountInMax',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'function',
            stateMutability: 'nonpayable',
            outputs: [
                {
                    type: 'uint256[]',
                    name: 'amounts',
                    internalType: 'uint256[]',
                },
            ],
            name: 'swapTokensForExactTokens',
            inputs: [
                {
                    type: 'uint256',
                    name: 'amountOut',
                    internalType: 'uint256',
                },
                {
                    type: 'uint256',
                    name: 'amountInMax',
                    internalType: 'uint256',
                },
                {
                    type: 'address[]',
                    name: 'path',
                    internalType: 'address[]',
                },
                {
                    type: 'address',
                    name: 'to',
                    internalType: 'address',
                },
                {
                    type: 'uint256',
                    name: 'deadline',
                    internalType: 'uint256',
                },
            ],
        },
        {
            type: 'receive',
            stateMutability: 'payable',
        },
    ];
}
