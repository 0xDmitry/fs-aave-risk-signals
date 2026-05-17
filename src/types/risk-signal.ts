export type RiskSignalType = "forward-yield" | "reserve-stress"

export type RiskSignal = {
  slug: string
  reserveSymbol: "USDC" | "WETH"
  reserveAddress: string
  reservePageUrl: string
  type: RiskSignalType
  functionSpaceMarketId: number
  title: string
}
