import Link from "next/link";
import type { MarketConfig } from "@/types/market";
import { StatusBadge } from "@/components/StatusBadge";

type MarketCardProps = {
  market: MarketConfig;
};

export function MarketCard({ market }: MarketCardProps) {
  return (
    <Link
      href={`/markets/${market.slug}`}
      className="group block rounded-lg border border-line bg-white p-5 transition hover:border-ink hover:shadow-sm"
    >
      <div className="mb-6 flex flex-wrap gap-2">
        <StatusBadge signalType={market.signalType} />
        <StatusBadge status={market.status} />
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-ink">{market.title}</h3>
          <p className="text-sm text-slate-500">{market.subtitle}</p>
        </div>
        <p className="min-h-12 text-sm leading-6 text-slate-600">{market.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
        <span className="font-mono text-slate-500">functionSPACE #{market.functionSpaceMarketId}</span>
        <span className="font-semibold text-ink group-hover:text-aave">Open</span>
      </div>
    </Link>
  );
}
