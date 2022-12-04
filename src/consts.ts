import { BigDecimal } from '@subsquid/big-decimal'

export const knownContracts: ReadonlyArray<string> = []

export const CHAIN_NODE = 'wss://astar.api.onfinality.io/public-ws'

export const FACTORY_ADDRESS = '0xa9473608514457b4bf083f9045fa63ae5810a03e'
export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const ZERO_BI = 0n
export const ONE_BI = 1n
export const ZERO_BD = BigDecimal(0)
export const ONE_BD = BigDecimal(1)
export const BI_18 = 1000000000000000000n

export const PRECISION = 32

export const HOUR_MS = 1000.0 * 60.0 * 60.0
export const DAY_MS = HOUR_MS * 24.0
export const WEEK_MS = DAY_MS * 7.0
export const MONTH_MS = DAY_MS * 30.0
