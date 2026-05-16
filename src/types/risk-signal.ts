export type RiskSignalType = "forward-yield" | "reserve-stress"

export type RiskSignal = {
  slug: string
  reserveSymbol: "USDC" | "WETH"
  type: RiskSignalType
  functionSpaceMarketId: number
  title: string
}
