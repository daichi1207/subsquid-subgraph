import {AddLiquidityEventData} from "./_addLiquidityEventData"
import {RemoveLiquidityEventData} from "./_removeLiquidityEventData"

export type SwapEventData = AddLiquidityEventData | RemoveLiquidityEventData

export function fromJsonSwapEventData(json: any): SwapEventData {
  switch(json?.isTypeOf) {
    case 'AddLiquidityEventData': return new AddLiquidityEventData(undefined, json)
    case 'RemoveLiquidityEventData': return new RemoveLiquidityEventData(undefined, json)
    default: throw new TypeError('Unknown json object passed as SwapEventData')
  }
}
