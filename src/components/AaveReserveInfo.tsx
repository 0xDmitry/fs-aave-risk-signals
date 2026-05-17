import { chainId, evmAddress, useAaveMarket } from "@aave/react"

import { AAVE_V3_ETHEREUM_MARKET } from "@/config/aave-reserves"
import type { RiskSignal } from "@/types/risk-signal"

type AaveReserveInfoProps = {
  riskSignal: RiskSignal
}

export function AaveReserveInfo({ riskSignal }: AaveReserveInfoProps) {
  const { data, loading, error } = useAaveMarket({
    address: evmAddress(AAVE_V3_ETHEREUM_MARKET),
    chainId: chainId(1),
  })

  if (loading) {
    return (
      <section className="bg-paper rounded-lg border border-line p-5">
        <p className="text-muted text-sm">
          Loading live Aave V3 reserve data...
        </p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-paper rounded-lg border border-line p-5">
        <p className="text-sm text-red-600">
          Failed to load Aave V3 reserve data.
        </p>
      </section>
    )
  }

  const reserve = data?.supplyReserves.find((reserve) => {
    const address = reserve.underlyingToken.address.toLowerCase()
    return address === riskSignal.reserveAddress.toLowerCase()
  })

  if (!reserve) {
    return (
      <section className="bg-paper rounded-lg border border-line p-5">
        <p className="text-muted text-sm">
          Reserve not found in Aave V3 Ethereum market.
        </p>
      </section>
    )
  }

  const isYieldMarket = riskSignal.type === "forward-yield"

  const metricLabel = isYieldMarket ? "Current APY" : "Current Utilization Rate"

  const metricValue = isYieldMarket
    ? reserve.supplyInfo.apy.formatted + " %"
    : reserve.borrowInfo?.utilizationRate.formatted + " %"

  console.log(
    "reserve.supplyInfo: ",
    JSON.stringify(reserve.supplyInfo.apy.formatted),
  )

  const context = isYieldMarket
    ? "Live Aave V3 Ethereum USDC APY. This is the current yield signal behind the forward supply yield market."
    : "Live Aave V3 Ethereum WETH Utilization Rate. This is the current reserve tightness signal behind the reserve stress market."

  return (
    <section className="bg-paper rounded-lg border border-line p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <p className="text-muted text-xs font-semibold uppercase tracking-[0.12em]">
          Live Aave V3 reserve metrics
        </p>
        <a
          href={riskSignal.reservePageUrl}
          target="_blank"
          rel="noreferrer"
          className="text-muted text-xs font-semibold uppercase tracking-[0.12em] transition hover:text-ink"
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

      <p className="text-ink-muted mt-4 text-sm leading-6">{context}</p>
    </section>
  )
}
