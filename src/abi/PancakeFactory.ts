import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type PairCreated0Event = ([token0: string, token1: string, pair: string, ethers.BigNumber] & {token0: string, token1: string, pair: string})

export interface EvmLog {
  data: string;
  topics: string[];
}

function decodeEvent(signature: string, data: EvmLog): any {
  return abi.decodeEventLog(
    abi.getEvent(signature),
    data.data || "",
    data.topics
  );
}

export const events = {
  "PairCreated(address,address,address,uint256)": {
    topic: abi.getEventTopic("PairCreated(address,address,address,uint256)"),
    decode(data: EvmLog): PairCreated0Event {
      return decodeEvent("PairCreated(address,address,address,uint256)", data)
    }
  }
  ,
}

export type CreatePair0Function = ([tokenA: string, tokenB: string] & {tokenA: string, tokenB: string})

export type SetFeeTo0Function = ([_feeTo: string] & {_feeTo: string})

export type SetFeeToSetter0Function = ([_feeToSetter: string] & {_feeToSetter: string})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "createPair(address,address)": {
    sighash: abi.getSighash("createPair(address,address)"),
    decode(input: string): CreatePair0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setFeeTo(address)": {
    sighash: abi.getSighash("setFeeTo(address)"),
    decode(input: string): SetFeeTo0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setFeeToSetter(address)": {
    sighash: abi.getSighash("setFeeToSetter(address)"),
    decode(input: string): SetFeeToSetter0Function {
      return decodeFunction(input)
    }
  }
  ,
}

interface ChainContext  {
  _chain: Chain
}

interface BlockContext  {
  _chain: Chain
  block: Block
}

interface Block  {
  height: number
}

interface Chain  {
  client:  {
    call: <T=any>(method: string, params?: unknown[]) => Promise<T>
  }
}

export class Contract  {
  private readonly _chain: Chain
  private readonly blockHeight: number
  readonly address: string

  constructor(ctx: BlockContext, address: string)
  constructor(ctx: ChainContext, block: Block, address: string)
  constructor(ctx: BlockContext, blockOrAddress: Block | string, address?: string) {
    this._chain = ctx._chain
    if (typeof blockOrAddress === 'string')  {
      this.blockHeight = ctx.block.height
      this.address = ethers.utils.getAddress(blockOrAddress)
    }
    else  {
      assert(address != null)
      this.blockHeight = blockOrAddress.height
      this.address = ethers.utils.getAddress(address)
    }
  }

  async INIT_CODE_PAIR_HASH(): Promise<string> {
    return this.call("INIT_CODE_PAIR_HASH", [])
  }

  async allPairs(arg0: ethers.BigNumber): Promise<string> {
    return this.call("allPairs", [arg0])
  }

  async allPairsLength(): Promise<ethers.BigNumber> {
    return this.call("allPairsLength", [])
  }

  async feeTo(): Promise<string> {
    return this.call("feeTo", [])
  }

  async feeToSetter(): Promise<string> {
    return this.call("feeToSetter", [])
  }

  async getPair(arg0: string, arg1: string): Promise<string> {
    return this.call("getPair", [arg0, arg1])
  }

  private async call(name: string, args: any[]) : Promise<any> {
    const fragment = abi.getFunction(name)
    const data = abi.encodeFunctionData(fragment, args)
    const result = await this._chain.client.call('eth_call', [{to: this.address, data}, this.blockHeight])
    const decoded = abi.decodeFunctionResult(fragment, result)
    return decoded.length > 1 ? decoded : decoded[0]
  }
}

function getJsonAbi(): any {
  return [
    {
      "type": "constructor",
      "stateMutability": "nonpayable",
      "payable": false,
      "inputs": [
        {
          "type": "address",
          "name": "_feeToSetter",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "event",
      "name": "PairCreated",
      "inputs": [
        {
          "type": "address",
          "name": "token0",
          "internalType": "address",
          "indexed": true
        },
        {
          "type": "address",
          "name": "token1",
          "internalType": "address",
          "indexed": true
        },
        {
          "type": "address",
          "name": "pair",
          "internalType": "address",
          "indexed": false
        },
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256",
          "indexed": false
        }
      ],
      "anonymous": false
    },
    {
      "type": "function",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
        {
          "type": "bytes32",
          "name": "",
          "internalType": "bytes32"
        }
      ],
      "name": "INIT_CODE_PAIR_HASH",
      "inputs": [],
      "constant": true
    },
    {
      "type": "function",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "name": "allPairs",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "constant": true
    },
    {
      "type": "function",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "name": "allPairsLength",
      "inputs": [],
      "constant": true
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "payable": false,
      "outputs": [
        {
          "type": "address",
          "name": "pair",
          "internalType": "address"
        }
      ],
      "name": "createPair",
      "inputs": [
        {
          "type": "address",
          "name": "tokenA",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "tokenB",
          "internalType": "address"
        }
      ],
      "constant": false
    },
    {
      "type": "function",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "name": "feeTo",
      "inputs": [],
      "constant": true
    },
    {
      "type": "function",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "name": "feeToSetter",
      "inputs": [],
      "constant": true
    },
    {
      "type": "function",
      "stateMutability": "view",
      "payable": false,
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "name": "getPair",
      "inputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "constant": true
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "payable": false,
      "outputs": [],
      "name": "setFeeTo",
      "inputs": [
        {
          "type": "address",
          "name": "_feeTo",
          "internalType": "address"
        }
      ],
      "constant": false
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "payable": false,
      "outputs": [],
      "name": "setFeeToSetter",
      "inputs": [
        {
          "type": "address",
          "name": "_feeToSetter",
          "internalType": "address"
        }
      ],
      "constant": false
    }
  ]
}
