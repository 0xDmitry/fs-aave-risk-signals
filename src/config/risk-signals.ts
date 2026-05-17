import type { RiskSignal } from "@/types/risk-signal"

export const riskSignals: RiskSignal[] = [
  {
    slug: "aave-ethereum-usdc-forward-yield",
    reserveAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    reserveSymbol: "USDC",
    reservePageUrl:
      "https://app.aave.com/reserve-overview/?underlyingAsset=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&marketName=proto_mainnet_v3",
    type: "forward-yield",
    functionSpaceMarketId: 269,
    title: "Aave Ethereum USDC Forward Yield",
  },
  {
    slug: "aave-ethereum-weth-reserve-stress",
    reserveAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    reserveSymbol: "WETH",
    reservePageUrl:
      "https://app.aave.com/reserve-overview/?underlyingAsset=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&marketName=proto_mainnet_v3",
    type: "reserve-stress",
    functionSpaceMarketId: 270,
    title: "Aave Ethereum WETH Reserve Stress",
  },
]
