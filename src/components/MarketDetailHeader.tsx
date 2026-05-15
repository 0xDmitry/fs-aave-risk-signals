import type { FunctionSpaceMarketReference, MarketConfig } from "@/types/market";
import { StatusBadge } from "@/components/StatusBadge";

type MarketDetailHeaderProps = {
  market: MarketConfig;
  functionSpaceMarket: FunctionSpaceMarketReference;
};

export function MarketDetailHeader({
  market,
  functionSpaceMarket,
}: MarketDetailHeaderProps) {
  return (
    <section className="border-b border-line pb-8">
      <div className="mb-5 flex flex-wrap gap-2">
        <StatusBadge signalType={market.signalType} />
        <StatusBadge status={market.status} />
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-signal">
            Aave Risk Signals
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {market.title}
          </h1>
          <p className="mt-3 text-xl text-slate-600">{market.subtitle}</p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            {market.description}
          </p>
        </div>
        <aside className="rounded-lg border border-line bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Live market reference
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded border border-line bg-panel p-3">
              <p className="text-xs text-slate-500">Provider</p>
              <p className="mt-1 font-mono font-semibold text-ink">
                {functionSpaceMarket.provider}
              </p>
            </div>
            <div className="rounded border border-line bg-panel p-3">
              <p className="text-xs text-slate-500">Market ID</p>
              <p className="mt-1 font-mono font-semibold text-ink">
                {functionSpaceMarket.marketId}
              </p>
            </div>
            <div className="col-span-2 rounded border border-line bg-panel p-3">
              <p className="text-xs text-slate-500">Integration</p>
              <p className="mt-1 font-mono font-semibold text-ink">
                {functionSpaceMarket.integrationModel}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
