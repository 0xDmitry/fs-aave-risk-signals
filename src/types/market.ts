export type MarketStatus = "active" | "pending" | "resolved"

export type SignalType = "forward-yield" | "reserve-stress"

export type MarketConfig = {
  id: string
  slug: string
  signalType: SignalType
  functionSpaceMarketId: number
  externalMarketUrl: string
  reserveSymbol: "USDC" | "WETH"
  title: string
  subtitle: string
  description: string
  status: MarketStatus
}

export type FunctionSpaceMarketReference = {
  provider: "functionSPACE"
  marketId: number
  externalUrl: string
  apiBaseUrl: string
  integrationModel: "sdk-widgets"
  status: "sdk-widgets-live" | "sdk-pending"
}

export type AaveReserveSnapshot = {
  symbol: string
  network: string
  currentMetricLabel: string
  currentMetricValue: string
  context: string
}
