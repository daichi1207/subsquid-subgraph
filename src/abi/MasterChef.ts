import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type Deposit0Event = ([user: string, pid: ethers.BigNumber, amount: ethers.BigNumber, to: string] & {user: string, pid: ethers.BigNumber, amount: ethers.BigNumber, to: string})

export type DepositARSW0Event = ([blockNumber: ethers.BigNumber, amount: ethers.BigNumber] & {blockNumber: ethers.BigNumber, amount: ethers.BigNumber})

export type EmergencyWithdraw0Event = ([user: string, pid: ethers.BigNumber, amount: ethers.BigNumber, to: string] & {user: string, pid: ethers.BigNumber, amount: ethers.BigNumber, to: string})

export type Harvest0Event = ([user: string, pid: ethers.BigNumber, amount: ethers.BigNumber] & {user: string, pid: ethers.BigNumber, amount: ethers.BigNumber})

export type LogPoolAddition0Event = ([pid: ethers.BigNumber, allocPoint: ethers.BigNumber, lpToken: string, rewarder: string] & {pid: ethers.BigNumber, allocPoint: ethers.BigNumber, lpToken: string, rewarder: string})

export type LogSetPool0Event = ([pid: ethers.BigNumber, allocPoint: ethers.BigNumber, rewarder: string, overwrite: boolean] & {pid: ethers.BigNumber, allocPoint: ethers.BigNumber, rewarder: string, overwrite: boolean})

export type LogUpdatePool0Event = ([pid: ethers.BigNumber, lastRewardBlock: ethers.BigNumber, lpSupply: ethers.BigNumber, accARSWPerShare: ethers.BigNumber] & {pid: ethers.BigNumber, lastRewardBlock: ethers.BigNumber, lpSupply: ethers.BigNumber, accARSWPerShare: ethers.BigNumber})

export type OwnershipTransferred0Event = ([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})

export type Withdraw0Event = ([user: string, pid: ethers.BigNumber, amount: ethers.BigNumber, to: string] & {user: string, pid: ethers.BigNumber, amount: ethers.BigNumber, to: string})

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
  "Deposit(address,uint256,uint256,address)": {
    topic: abi.getEventTopic("Deposit(address,uint256,uint256,address)"),
    decode(data: EvmLog): Deposit0Event {
      return decodeEvent("Deposit(address,uint256,uint256,address)", data)
    }
  }
  ,
  "DepositARSW(uint256,uint256)": {
    topic: abi.getEventTopic("DepositARSW(uint256,uint256)"),
    decode(data: EvmLog): DepositARSW0Event {
      return decodeEvent("DepositARSW(uint256,uint256)", data)
    }
  }
  ,
  "EmergencyWithdraw(address,uint256,uint256,address)": {
    topic: abi.getEventTopic("EmergencyWithdraw(address,uint256,uint256,address)"),
    decode(data: EvmLog): EmergencyWithdraw0Event {
      return decodeEvent("EmergencyWithdraw(address,uint256,uint256,address)", data)
    }
  }
  ,
  "Harvest(address,uint256,uint256)": {
    topic: abi.getEventTopic("Harvest(address,uint256,uint256)"),
    decode(data: EvmLog): Harvest0Event {
      return decodeEvent("Harvest(address,uint256,uint256)", data)
    }
  }
  ,
  "LogPoolAddition(uint256,uint256,address,address)": {
    topic: abi.getEventTopic("LogPoolAddition(uint256,uint256,address,address)"),
    decode(data: EvmLog): LogPoolAddition0Event {
      return decodeEvent("LogPoolAddition(uint256,uint256,address,address)", data)
    }
  }
  ,
  "LogSetPool(uint256,uint256,address,bool)": {
    topic: abi.getEventTopic("LogSetPool(uint256,uint256,address,bool)"),
    decode(data: EvmLog): LogSetPool0Event {
      return decodeEvent("LogSetPool(uint256,uint256,address,bool)", data)
    }
  }
  ,
  "LogUpdatePool(uint256,uint64,uint256,uint256)": {
    topic: abi.getEventTopic("LogUpdatePool(uint256,uint64,uint256,uint256)"),
    decode(data: EvmLog): LogUpdatePool0Event {
      return decodeEvent("LogUpdatePool(uint256,uint64,uint256,uint256)", data)
    }
  }
  ,
  "OwnershipTransferred(address,address)": {
    topic: abi.getEventTopic("OwnershipTransferred(address,address)"),
    decode(data: EvmLog): OwnershipTransferred0Event {
      return decodeEvent("OwnershipTransferred(address,address)", data)
    }
  }
  ,
  "Withdraw(address,uint256,uint256,address)": {
    topic: abi.getEventTopic("Withdraw(address,uint256,uint256,address)"),
    decode(data: EvmLog): Withdraw0Event {
      return decodeEvent("Withdraw(address,uint256,uint256,address)", data)
    }
  }
  ,
}

export type Add0Function = ([allocPoint: ethers.BigNumber, lpToken: string, rewarder: string] & {allocPoint: ethers.BigNumber, lpToken: string, rewarder: string})

export type Batch0Function = ([calls: string, revertOnFail: boolean] & {calls: string, revertOnFail: boolean})

export type Deposit0Function = ([pid: ethers.BigNumber, amount: ethers.BigNumber, to: string] & {pid: ethers.BigNumber, amount: ethers.BigNumber, to: string})

export type DepositARSW0Function = ([amount: ethers.BigNumber] & {amount: ethers.BigNumber})

export type EmergencyWithdraw0Function = ([pid: ethers.BigNumber, to: string] & {pid: ethers.BigNumber, to: string})

export type Harvest0Function = ([pid: ethers.BigNumber, to: string] & {pid: ethers.BigNumber, to: string})

export type MassUpdatePools0Function = ([pids: Array<ethers.BigNumber>] & {pids: Array<ethers.BigNumber>})

export type PermitToken0Function = ([token: string, from: string, to: string, amount: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string] & {token: string, from: string, to: string, amount: ethers.BigNumber, deadline: ethers.BigNumber, v: number, r: string, s: string})

export type Set0Function = ([pid: ethers.BigNumber, allocPoint: ethers.BigNumber, rewarder: string, overwrite: boolean] & {pid: ethers.BigNumber, allocPoint: ethers.BigNumber, rewarder: string, overwrite: boolean})

export type TransferOwnership0Function = ([newOwner: string, direct: boolean, renounce: boolean] & {newOwner: string, direct: boolean, renounce: boolean})

export type UpdatePool0Function = ([pid: ethers.BigNumber] & {pid: ethers.BigNumber})

export type Withdraw0Function = ([pid: ethers.BigNumber, amount: ethers.BigNumber, to: string] & {pid: ethers.BigNumber, amount: ethers.BigNumber, to: string})

export type WithdrawAndHarvest0Function = ([pid: ethers.BigNumber, amount: ethers.BigNumber, to: string] & {pid: ethers.BigNumber, amount: ethers.BigNumber, to: string})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "add(uint256,address,address)": {
    sighash: abi.getSighash("add(uint256,address,address)"),
    decode(input: string): Add0Function {
      return decodeFunction(input)
    }
  }
  ,
  "batch(bytes[],bool)": {
    sighash: abi.getSighash("batch(bytes[],bool)"),
    decode(input: string): Batch0Function {
      return decodeFunction(input)
    }
  }
  ,
  "claimOwnership()": {
    sighash: abi.getSighash("claimOwnership()"),
  }
  ,
  "deposit(uint256,uint256,address)": {
    sighash: abi.getSighash("deposit(uint256,uint256,address)"),
    decode(input: string): Deposit0Function {
      return decodeFunction(input)
    }
  }
  ,
  "depositARSW(uint256)": {
    sighash: abi.getSighash("depositARSW(uint256)"),
    decode(input: string): DepositARSW0Function {
      return decodeFunction(input)
    }
  }
  ,
  "emergencyWithdraw(uint256,address)": {
    sighash: abi.getSighash("emergencyWithdraw(uint256,address)"),
    decode(input: string): EmergencyWithdraw0Function {
      return decodeFunction(input)
    }
  }
  ,
  "harvest(uint256,address)": {
    sighash: abi.getSighash("harvest(uint256,address)"),
    decode(input: string): Harvest0Function {
      return decodeFunction(input)
    }
  }
  ,
  "massUpdatePools(uint256[])": {
    sighash: abi.getSighash("massUpdatePools(uint256[])"),
    decode(input: string): MassUpdatePools0Function {
      return decodeFunction(input)
    }
  }
  ,
  "permitToken(address,address,address,uint256,uint256,uint8,bytes32,bytes32)": {
    sighash: abi.getSighash("permitToken(address,address,address,uint256,uint256,uint8,bytes32,bytes32)"),
    decode(input: string): PermitToken0Function {
      return decodeFunction(input)
    }
  }
  ,
  "set(uint256,uint256,address,bool)": {
    sighash: abi.getSighash("set(uint256,uint256,address,bool)"),
    decode(input: string): Set0Function {
      return decodeFunction(input)
    }
  }
  ,
  "transferOwnership(address,bool,bool)": {
    sighash: abi.getSighash("transferOwnership(address,bool,bool)"),
    decode(input: string): TransferOwnership0Function {
      return decodeFunction(input)
    }
  }
  ,
  "updateAllPools()": {
    sighash: abi.getSighash("updateAllPools()"),
  }
  ,
  "updatePool(uint256)": {
    sighash: abi.getSighash("updatePool(uint256)"),
    decode(input: string): UpdatePool0Function {
      return decodeFunction(input)
    }
  }
  ,
  "withdraw(uint256,uint256,address)": {
    sighash: abi.getSighash("withdraw(uint256,uint256,address)"),
    decode(input: string): Withdraw0Function {
      return decodeFunction(input)
    }
  }
  ,
  "withdrawAndHarvest(uint256,uint256,address)": {
    sighash: abi.getSighash("withdrawAndHarvest(uint256,uint256,address)"),
    decode(input: string): WithdrawAndHarvest0Function {
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

  async ARSW(): Promise<string> {
    return this.call("ARSW", [])
  }

  async ARSWPerBlock(period: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("ARSWPerBlock", [period])
  }

  async FIRST_PERIOD_REWERD_SUPPLY(): Promise<ethers.BigNumber> {
    return this.call("FIRST_PERIOD_REWERD_SUPPLY", [])
  }

  async getPeriod(blockNumber: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("getPeriod", [blockNumber])
  }

  async lpTokens(arg0: ethers.BigNumber): Promise<string> {
    return this.call("lpTokens", [arg0])
  }

  async owner(): Promise<string> {
    return this.call("owner", [])
  }

  async pendingARSW(pid: ethers.BigNumber, user: string): Promise<ethers.BigNumber> {
    return this.call("pendingARSW", [pid, user])
  }

  async pendingOwner(): Promise<string> {
    return this.call("pendingOwner", [])
  }

  async periodMax(period: ethers.BigNumber): Promise<ethers.BigNumber> {
    return this.call("periodMax", [period])
  }

  async poolInfos(arg0: ethers.BigNumber): Promise<([accARSWPerShare: ethers.BigNumber, lastRewardBlock: ethers.BigNumber, allocPoint: ethers.BigNumber] & {accARSWPerShare: ethers.BigNumber, lastRewardBlock: ethers.BigNumber, allocPoint: ethers.BigNumber})> {
    return this.call("poolInfos", [arg0])
  }

  async poolLength(): Promise<ethers.BigNumber> {
    return this.call("poolLength", [])
  }

  async rewarders(arg0: ethers.BigNumber): Promise<string> {
    return this.call("rewarders", [arg0])
  }

  async totalAllocPoint(): Promise<ethers.BigNumber> {
    return this.call("totalAllocPoint", [])
  }

  async userInfos(arg0: ethers.BigNumber, arg1: string): Promise<([amount: ethers.BigNumber, rewardDebt: ethers.BigNumber] & {amount: ethers.BigNumber, rewardDebt: ethers.BigNumber})> {
    return this.call("userInfos", [arg0, arg1])
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
      "inputs": [
        {
          "type": "address",
          "name": "arswToken",
          "internalType": "contract IERC20"
        }
      ]
    },
    {
      "type": "event",
      "name": "Deposit",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "internalType": "address",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256",
          "indexed": false
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address",
          "indexed": true
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DepositARSW",
      "inputs": [
        {
          "type": "uint256",
          "name": "blockNumber",
          "internalType": "uint256",
          "indexed": false
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256",
          "indexed": false
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "EmergencyWithdraw",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "internalType": "address",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256",
          "indexed": false
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address",
          "indexed": true
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Harvest",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "internalType": "address",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256",
          "indexed": false
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LogPoolAddition",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "allocPoint",
          "internalType": "uint256",
          "indexed": false
        },
        {
          "type": "address",
          "name": "lpToken",
          "internalType": "contract IERC20",
          "indexed": true
        },
        {
          "type": "address",
          "name": "rewarder",
          "internalType": "contract IRewarder",
          "indexed": true
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LogSetPool",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "allocPoint",
          "internalType": "uint256",
          "indexed": false
        },
        {
          "type": "address",
          "name": "rewarder",
          "internalType": "contract IRewarder",
          "indexed": true
        },
        {
          "type": "bool",
          "name": "overwrite",
          "internalType": "bool",
          "indexed": false
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LogUpdatePool",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256",
          "indexed": true
        },
        {
          "type": "uint64",
          "name": "lastRewardBlock",
          "internalType": "uint64",
          "indexed": false
        },
        {
          "type": "uint256",
          "name": "lpSupply",
          "internalType": "uint256",
          "indexed": false
        },
        {
          "type": "uint256",
          "name": "accARSWPerShare",
          "internalType": "uint256",
          "indexed": false
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "type": "address",
          "name": "previousOwner",
          "internalType": "address",
          "indexed": true
        },
        {
          "type": "address",
          "name": "newOwner",
          "internalType": "address",
          "indexed": true
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Withdraw",
      "inputs": [
        {
          "type": "address",
          "name": "user",
          "internalType": "address",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256",
          "indexed": false
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address",
          "indexed": true
        }
      ],
      "anonymous": false
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "contract IERC20"
        }
      ],
      "name": "ARSW",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "pure",
      "outputs": [
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ],
      "name": "ARSWPerBlock",
      "inputs": [
        {
          "type": "uint256",
          "name": "period",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "name": "FIRST_PERIOD_REWERD_SUPPLY",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "add",
      "inputs": [
        {
          "type": "uint256",
          "name": "allocPoint",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "lpToken",
          "internalType": "contract IERC20"
        },
        {
          "type": "address",
          "name": "rewarder",
          "internalType": "contract IRewarder"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "payable",
      "outputs": [],
      "name": "batch",
      "inputs": [
        {
          "type": "bytes[]",
          "name": "calls",
          "internalType": "bytes[]"
        },
        {
          "type": "bool",
          "name": "revertOnFail",
          "internalType": "bool"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "claimOwnership",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "deposit",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "depositARSW",
      "inputs": [
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "emergencyWithdraw",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "uint256",
          "name": "period",
          "internalType": "uint256"
        }
      ],
      "name": "getPeriod",
      "inputs": [
        {
          "type": "uint256",
          "name": "blockNumber",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "harvest",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "contract IERC20"
        }
      ],
      "name": "lpTokens",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "massUpdatePools",
      "inputs": [
        {
          "type": "uint256[]",
          "name": "pids",
          "internalType": "uint256[]"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "name": "owner",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "uint256",
          "name": "pending",
          "internalType": "uint256"
        }
      ],
      "name": "pendingARSW",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "user",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ],
      "name": "pendingOwner",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "uint256",
          "name": "periodMaxBlock",
          "internalType": "uint256"
        }
      ],
      "name": "periodMax",
      "inputs": [
        {
          "type": "uint256",
          "name": "period",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "permitToken",
      "inputs": [
        {
          "type": "address",
          "name": "token",
          "internalType": "contract IERC20"
        },
        {
          "type": "address",
          "name": "from",
          "internalType": "address"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "deadline",
          "internalType": "uint256"
        },
        {
          "type": "uint8",
          "name": "v",
          "internalType": "uint8"
        },
        {
          "type": "bytes32",
          "name": "r",
          "internalType": "bytes32"
        },
        {
          "type": "bytes32",
          "name": "s",
          "internalType": "bytes32"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "uint128",
          "name": "accARSWPerShare",
          "internalType": "uint128"
        },
        {
          "type": "uint64",
          "name": "lastRewardBlock",
          "internalType": "uint64"
        },
        {
          "type": "uint64",
          "name": "allocPoint",
          "internalType": "uint64"
        }
      ],
      "name": "poolInfos",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "uint256",
          "name": "pools",
          "internalType": "uint256"
        }
      ],
      "name": "poolLength",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "contract IRewarder"
        }
      ],
      "name": "rewarders",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "set",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "allocPoint",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "rewarder",
          "internalType": "contract IRewarder"
        },
        {
          "type": "bool",
          "name": "overwrite",
          "internalType": "bool"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "name": "totalAllocPoint",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "transferOwnership",
      "inputs": [
        {
          "type": "address",
          "name": "newOwner",
          "internalType": "address"
        },
        {
          "type": "bool",
          "name": "direct",
          "internalType": "bool"
        },
        {
          "type": "bool",
          "name": "renounce",
          "internalType": "bool"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "updateAllPools",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [
        {
          "type": "tuple",
          "name": "pool",
          "internalType": "struct MasterChef.PoolInfo",
          "components": [
            {
              "type": "uint128",
              "name": "accARSWPerShare",
              "internalType": "uint128"
            },
            {
              "type": "uint64",
              "name": "lastRewardBlock",
              "internalType": "uint64"
            },
            {
              "type": "uint64",
              "name": "allocPoint",
              "internalType": "uint64"
            }
          ]
        }
      ],
      "name": "updatePool",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        },
        {
          "type": "int256",
          "name": "rewardDebt",
          "internalType": "int256"
        }
      ],
      "name": "userInfos",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "withdraw",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "withdrawAndHarvest",
      "inputs": [
        {
          "type": "uint256",
          "name": "pid",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "amount",
          "internalType": "uint256"
        },
        {
          "type": "address",
          "name": "to",
          "internalType": "address"
        }
      ]
    }
  ]
}
