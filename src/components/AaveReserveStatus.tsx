import {
  chainId,
  evmAddress,
  useAaveMarket,
  useSupplyAPYHistory,
  TimeWindow,
} from "@aave/react"

import { AAVE_V3_ETHEREUM_MARKET } from "@/config/aave-reserves"
import { calculateTimeWeightedAverageApy } from "@/lib/calculate-apy"
import { formatUnits } from "@/lib/format"
import type { RiskSignal } from "@/types/risk-signal"

type AaveReserveInfoProps = {
  riskSignal: RiskSignal
}

export function AaveReserveStatus({ riskSignal }: AaveReserveInfoProps) {
  const {
    data: aaveMarket,
    loading: marketLoading,
    error: marketError,
  } = useAaveMarket({
    address: evmAddress(AAVE_V3_ETHEREUM_MARKET),
    chainId: chainId(1),
  })

  const {
    data: supplyApyHistory,
    loading: supplyApyHistoryLoading,
    error: supplyApyHistoryError,
  } = useSupplyAPYHistory({
    market: evmAddress(AAVE_V3_ETHEREUM_MARKET),
    underlyingToken: evmAddress(riskSignal.reserveAddress),
    chainId: chainId(1),
    window: TimeWindow.LastSixMonths,
  })

  if (marketLoading || supplyApyHistoryLoading) {
    return (
      <section className="bg-paper min-h-[162px] border border-line p-5 sm:rounded-xl">
        <p className="text-muted text-sm">
          Loading live Aave V3 reserve data...
        </p>
      </section>
    )
  }

  if (marketError || supplyApyHistoryError) {
    return (
      <section className="bg-paper min-h-[162px] border border-line p-5 sm:rounded-xl">
        <p className="text-sm text-red-600">
          Failed to load Aave V3 reserve data.
        </p>
      </section>
    )
  }

  const reserve = aaveMarket?.supplyReserves.find((reserve) => {
    const address = reserve.underlyingToken.address.toLowerCase()
    return address === riskSignal.reserveAddress.toLowerCase()
  })

  if (!reserve) {
    return (
      <section className="bg-paper min-h-[162px] border border-line p-5 sm:rounded-xl">
        <p className="text-muted text-sm">
          Reserve not found in Aave V3 Ethereum market.
        </p>
      </section>
    )
  }

  const usdcAverageApy = calculateTimeWeightedAverageApy(
    Array.isArray(supplyApyHistory) ? supplyApyHistory : [],
    Date.UTC(2026, 4, 8, 0, 0, 0),
    Math.max(Date.now(), Date.UTC(2026, 5, 7, 0, 0, 0)),
  )

  const isYieldMarket = riskSignal.type === "forward-yield"

  const metricLabel = isYieldMarket ? "Average APY" : "Current Utilization Rate"

  const metricValue = isYieldMarket
    ? usdcAverageApy
      ? `${formatUnits(usdcAverageApy * BigInt(100), 27)} %`
      : "-"
    : `${reserve.borrowInfo?.utilizationRate.formatted} %`

  const description = isYieldMarket
    ? "Live Aave V3 Ethereum USDC 30-Day Average Supply APY (May 8 - June 6 2026)"
    : "Live Aave V3 Ethereum WETH Reserve Utilization"

  return (
    <section className="bg-paper min-h-[162px] border border-line p-5 sm:rounded-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <p className="text-muted text-xs font-semibold uppercase tracking-[0.12em]">
          Live Aave V3 reserve status
        </p>
        <a
          href={riskSignal.reservePageUrl}
          target="_blank"
          rel="noreferrer"
          className="text-ink-muted text-xs font-semibold uppercase tracking-[0.12em] transition hover:text-ink"
        >
          View on Aave V3 ↗
        </a>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-muted text-xs">Reserve</p>
          <p className="mt-1 text-xl font-semibold text-ink">
            {riskSignal.reserveSymbol}
          </p>
        </div>

        <div>
          <p className="text-muted text-xs">Network</p>
          <p className="mt-1 text-xl font-semibold text-ink">Ethereum</p>
        </div>

        <div>
          <p className="text-muted text-xs">{metricLabel}</p>
          <p className="mt-1 text-xl font-semibold text-ink">{metricValue}</p>
        </div>
      </div>

      <p className="text-ink-muted mt-4 text-sm leading-6">{description}</p>
    </section>
  )
}
