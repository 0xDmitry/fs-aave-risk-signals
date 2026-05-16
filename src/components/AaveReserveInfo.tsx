import { chainId, evmAddress, useAaveMarket } from "@aave/react"

import {
  AAVE_V3_ETHEREUM_MARKET,
  RESERVE_ADDRESSES,
} from "@/config/aave-reserves"
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
      <section className="rounded-lg border border-line bg-white p-5">
        <p className="text-sm text-slate-500">
          Loading live Aave reserve data...
        </p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="rounded-lg border border-line bg-white p-5">
        <p className="text-sm text-red-600">
          Failed to load Aave reserve data.
        </p>
      </section>
    )
  }

  const reserve = data?.supplyReserves.find((reserve) => {
    const address = reserve.underlyingToken.address.toLowerCase()
    return address === RESERVE_ADDRESSES[riskSignal.reserveSymbol].toLowerCase()
  })

  if (!reserve) {
    return (
      <section className="rounded-lg border border-line bg-white p-5">
        <p className="text-sm text-slate-500">
          Reserve not found in Aave Ethereum market.
        </p>
      </section>
    )
  }

  const isYieldMarket = riskSignal.type === "forward-yield"

  const metricLabel = isYieldMarket
    ? "Current supply APY"
    : "Current utilization"

  const metricValue = isYieldMarket
    ? reserve.supplyInfo.apy.formatted + " %"
    : reserve.borrowInfo?.utilizationRate.formatted + " %"

  console.log(
    "reserve.supplyInfo: ",
    JSON.stringify(reserve.supplyInfo.apy.formatted),
  )

  const context = isYieldMarket
    ? "Live Aave V3 Ethereum USDC supply APY. This is the current yield signal behind the forward supply yield market."
    : "Live Aave V3 Ethereum WETH utilization. This is the current reserve tightness signal behind the reserve stress market."

  return (
    <section className="rounded-lg border border-line bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        Live Aave reserve context
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs text-slate-500">Reserve</p>
          <p className="mt-1 text-xl font-semibold text-ink">
            {riskSignal.reserveSymbol}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Network</p>
          <p className="mt-1 text-xl font-semibold text-ink">Ethereum</p>
        </div>

        <div>
          <p className="text-xs text-slate-500">{metricLabel}</p>
          <p className="mt-1 text-xl font-semibold text-ink">{metricValue}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{context}</p>
    </section>
  )
}
