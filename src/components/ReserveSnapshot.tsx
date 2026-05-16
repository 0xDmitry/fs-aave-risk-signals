import type { AaveReserveSnapshot } from "@/types/market"

type ReserveSnapshotProps = {
  reserve: AaveReserveSnapshot
}

export function ReserveSnapshot({ reserve }: ReserveSnapshotProps) {
  return (
    <section className="rounded-lg border border-line bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        Aave reserve context
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs text-slate-500">Reserve</p>
          <p className="mt-1 text-xl font-semibold text-ink">
            {reserve.symbol}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Network</p>
          <p className="mt-1 text-xl font-semibold text-ink">
            {reserve.network}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-500">{reserve.currentMetricLabel}</p>
          <p className="mt-1 text-xl font-semibold text-ink">
            {reserve.currentMetricValue}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{reserve.context}</p>
    </section>
  )
}
