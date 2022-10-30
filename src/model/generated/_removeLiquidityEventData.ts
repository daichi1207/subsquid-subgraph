import assert from "assert"
import * as marshal from "./marshal"

export class RemoveLiquidityEventData {
  public readonly isTypeOf = 'RemoveLiquidityEventData'
  private _provider!: Uint8Array
  private _tokenAmounts!: (bigint)[]
  private _fees!: (bigint)[] | undefined | null
  private _lpTokenSupply!: bigint

  constructor(props?: Partial<Omit<RemoveLiquidityEventData, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._provider = marshal.bytes.fromJSON(json.provider)
      this._tokenAmounts = marshal.fromList(json.tokenAmounts, val => marshal.bigint.fromJSON(val))
      this._fees = json.fees == null ? undefined : marshal.fromList(json.fees, val => marshal.bigint.fromJSON(val))
      this._lpTokenSupply = marshal.bigint.fromJSON(json.lpTokenSupply)
    }
  }

  get provider(): Uint8Array {
    assert(this._provider != null, 'uninitialized access')
    return this._provider
  }

  set provider(value: Uint8Array) {
    this._provider = value
  }

  get tokenAmounts(): (bigint)[] {
    assert(this._tokenAmounts != null, 'uninitialized access')
    return this._tokenAmounts
  }

  set tokenAmounts(value: (bigint)[]) {
    this._tokenAmounts = value
  }

  get fees(): (bigint)[] | undefined | null {
    return this._fees
  }

  set fees(value: (bigint)[] | undefined | null) {
    this._fees = value
  }

  get lpTokenSupply(): bigint {
    assert(this._lpTokenSupply != null, 'uninitialized access')
    return this._lpTokenSupply
  }

  set lpTokenSupply(value: bigint) {
    this._lpTokenSupply = value
  }

  toJSON(): object {
    return {
      isTypeOf: this.isTypeOf,
      provider: marshal.bytes.toJSON(this.provider),
      tokenAmounts: this.tokenAmounts.map((val: any) => marshal.bigint.toJSON(val)),
      fees: this.fees == null ? undefined : this.fees.map((val: any) => marshal.bigint.toJSON(val)),
      lpTokenSupply: marshal.bigint.toJSON(this.lpTokenSupply),
    }
  }
}
