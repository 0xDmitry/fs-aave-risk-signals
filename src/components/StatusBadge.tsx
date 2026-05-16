import type { MarketStatus, SignalType } from "@/types/market"

type StatusBadgeProps = {
  status?: MarketStatus
  signalType?: SignalType
}

const labels: Record<MarketStatus | SignalType, string> = {
  active: "Active",
  pending: "Pending",
  resolved: "Resolved",
  "forward-yield": "Forward yield",
  "reserve-stress": "Reserve stress",
}

export function StatusBadge({ status, signalType }: StatusBadgeProps) {
  const value = status ?? signalType

  if (!value) {
    return null
  }

  return (
    <span className="inline-flex items-center rounded border border-line bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink">
      {labels[value]}
    </span>
  )
}
