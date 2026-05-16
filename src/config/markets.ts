import type { MarketConfig } from "@/types/market"

export const markets: MarketConfig[] = [
  {
    id: "aave-eth-usdc-30d-supply-apy",
    slug: "aave-ethereum-usdc-30d-supply-apy",
    signalType: "forward-yield",
    functionSpaceMarketId: 269,
    externalMarketUrl: "https://demo.functionspace.dev/trading/269",
    reserveSymbol: "USDC",
    title: "Aave Ethereum USDC",
    subtitle: "30-day average supply APY",
    description:
      "Forward market for the average USDC supply APY on Aave Ethereum over the next 30 full UTC days.",
    status: "active",
  },
  {
    id: "aave-eth-weth-month-end-utilization",
    slug: "aave-ethereum-weth-month-end-utilization",
    signalType: "reserve-stress",
    functionSpaceMarketId: 270,
    externalMarketUrl: "https://demo.functionspace.dev/trading/270",
    reserveSymbol: "WETH",
    title: "Aave Ethereum WETH",
    subtitle: "Month-end utilization",
    description:
      "Reserve stress market for Aave Ethereum WETH utilization at the end of the current monthly period.",
    status: "active",
  },
]

export function getMarketBySlug(slug: string) {
  return markets.find((market) => market.slug === slug)
}
