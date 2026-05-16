import type { AaveReserveSnapshot } from "@/types/market"

// TODO[Aave data ingestion]: Replace these local reserve snapshots with live Aave reserve data.
export const aaveReserveSnapshots: Record<string, AaveReserveSnapshot> = {
  USDC: {
    symbol: "USDC",
    network: "Ethereum",
    currentMetricLabel: "Current supply APY",
    currentMetricValue: "4.18%",
    context: "Stablecoin reserve with yield-sensitive supplier demand.",
  },
  WETH: {
    symbol: "WETH",
    network: "Ethereum",
    currentMetricLabel: "Current utilization",
    currentMetricValue: "82.4%",
    context:
      "Core collateral reserve where utilization can flag borrow-side stress.",
  },
}
