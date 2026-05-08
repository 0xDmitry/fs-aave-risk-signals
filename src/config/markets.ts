import type { MarketConfig } from "@/types/market";

export const markets: MarketConfig[] = [
  {
    id: "aave-eth-usdc-30d-supply-apy",
    slug: "aave-ethereum-usdc-30d-supply-apy",
    title: "Aave Ethereum USDC",
    subtitle: "30-day average supply APY",
    description:
      "Forward market for the average USDC supply APY on Aave Ethereum over the next 30 full UTC days.",
    signalType: "forward-yield",
    functionSpaceMarketId: 269,
    resolutionRuleSummary:
      "Resolves against the 30-day average Aave Ethereum USDC supply APY over the defined UTC measurement window.",
    status: "active",
    reserveSymbol: "USDC",
  },
  {
    id: "aave-eth-weth-month-end-utilization",
    slug: "aave-ethereum-weth-month-end-utilization",
    title: "Aave Ethereum WETH",
    subtitle: "Month-end utilization",
    description:
      "Reserve stress market for Aave Ethereum WETH utilization at the end of the current monthly period.",
    signalType: "reserve-stress",
    functionSpaceMarketId: 270,
    resolutionRuleSummary:
      "Resolves against the Aave Ethereum WETH reserve utilization observed at month end.",
    status: "active",
    reserveSymbol: "WETH",
  },
];

export function getMarketBySlug(slug: string) {
  return markets.find((market) => market.slug === slug);
}
