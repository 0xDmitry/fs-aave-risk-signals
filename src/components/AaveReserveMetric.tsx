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

type AaveReserveMetricProps = {
  riskSignal: RiskSignal
}

export function AaveReserveMetric({ riskSignal }: AaveReserveMetricProps) {
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
      <span className="fs-aave-reserve-metric-skeleton mt-1 text-xl font-semibold text-ink">
        {" "}
      </span>
    )
  }

  if (marketError || supplyApyHistoryError) {
    return <p className="mt-1 text-xl font-semibold text-ink">N/A</p>
  }

  const reserve = aaveMarket?.supplyReserves.find((reserve) => {
    const address = reserve.underlyingToken.address.toLowerCase()
    return address === riskSignal.reserveAddress.toLowerCase()
  })

  if (!reserve) {
    return <p className="mt-1 text-xl font-semibold text-ink">N/A</p>
  }

  const usdcAverageApy = calculateTimeWeightedAverageApy(
    Array.isArray(supplyApyHistory) ? supplyApyHistory : [],
    Date.UTC(2026, 4, 8, 0, 0, 0),
    Math.max(Date.now(), Date.UTC(2026, 5, 7, 0, 0, 0)),
  )

  const isYieldMarket = riskSignal.type === "forward-yield"

  const metricValue = isYieldMarket
    ? usdcAverageApy
      ? `${formatUnits(usdcAverageApy * BigInt(100), 27)} %`
      : "N/A"
    : `${reserve.borrowInfo?.utilizationRate.formatted} %`

  return <p className="mt-1 text-xl font-semibold text-ink">{metricValue}</p>
}
