import type { RiskSignal } from "@/types/risk-signal"

export const riskSignals: RiskSignal[] = [
  {
    slug: "aave-ethereum-usdc-forward-yield",
    reserveSymbol: "USDC",
    type: "forward-yield",
    functionSpaceMarketId: 269,
    title: "Aave Ethereum USDC Forward Yield",
  },
  {
    slug: "aave-ethereum-weth-reserve-stress",
    reserveSymbol: "WETH",
    type: "reserve-stress",
    functionSpaceMarketId: 270,
    title: "Aave Ethereum WETH Reserve Stress",
  },
]
