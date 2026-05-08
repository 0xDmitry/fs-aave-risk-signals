import type { FunctionSpaceMarketReference, MarketConfig } from "@/types/market";

type FunctionSpaceMarketPanelProps = {
  market: MarketConfig;
  functionSpaceMarket: FunctionSpaceMarketReference;
};

export function FunctionSpaceMarketPanel({
  market,
  functionSpaceMarket,
}: FunctionSpaceMarketPanelProps) {
  return (
    <section className="rounded-lg border border-ink bg-ink p-5 text-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-aave">
            Market host
          </p>
          <h2 className="mt-2 text-2xl font-semibold">functionSPACE market #{functionSpaceMarket.marketId}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{market.description}</p>
        </div>
        <a
          href={functionSpaceMarket.embedUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center rounded border border-white/20 px-4 text-sm font-semibold text-white hover:border-aave hover:text-aave"
        >
          Open source market
        </a>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded border border-white/15 p-4">
          <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Provider</p>
          <p className="mt-2 font-mono text-sm">{functionSpaceMarket.provider}</p>
        </div>
        <div className="rounded border border-white/15 p-4">
          <p className="text-xs uppercase tracking-[0.1em] text-slate-400">SDK status</p>
          <p className="mt-2 font-mono text-sm">{functionSpaceMarket.status}</p>
        </div>
        <div className="rounded border border-white/15 p-4">
          <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Signal</p>
          <p className="mt-2 font-mono text-sm">{market.signalType}</p>
        </div>
      </div>
      <div className="mt-6 border-t border-white/15 pt-5">
        <p className="text-sm font-semibold text-white">Resolution summary</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">{market.resolutionRuleSummary}</p>
      </div>
      {/* TODO[functionSPACE SDK]: Mount the live Probability Market UI, consensus data,
      and simulated trade actions here once SDK or embed instructions are available. */}
      <div className="mt-5 rounded border border-aave/50 bg-aave/10 p-4 text-sm leading-6 text-slate-200">
        Live market rendering and simulated trading will connect through the functionSPACE adapter.
      </div>
    </section>
  );
}
