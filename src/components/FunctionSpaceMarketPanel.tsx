import type { FunctionSpaceMarketReference, MarketConfig } from "@/types/market";
import { FunctionSpaceSdkWidgets } from "@/components/FunctionSpaceSdkWidgets";

type FunctionSpaceMarketPanelProps = {
  market: MarketConfig;
  functionSpaceMarket: FunctionSpaceMarketReference;
};

export function FunctionSpaceMarketPanel({
  market,
  functionSpaceMarket,
}: FunctionSpaceMarketPanelProps) {
  return (
    <section className="rounded-lg border border-ink bg-ink p-5 text-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-white/15 pb-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-aave">
            functionSPACE SDK widgets
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Market #{functionSpaceMarket.marketId}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            This section uses the official functionSPACE SDK packages from the local
            SDK submodule. Data widgets run in guest mode; trade submission still requires
            functionSPACE authentication.
          </p>
        </div>
        <a
          href={functionSpaceMarket.externalUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded bg-aave px-4 text-sm font-semibold text-ink hover:bg-white"
        >
          Open live market
        </a>
      </div>

      <div className="mt-5">
        <div className="mb-4 grid gap-3 sm:grid-cols-4">
          <div className="rounded border border-white/15 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Provider</p>
            <p className="mt-2 font-mono text-sm text-white">{functionSpaceMarket.provider}</p>
          </div>
          <div className="rounded border border-white/15 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Market ID</p>
            <p className="mt-2 font-mono text-sm text-white">{functionSpaceMarket.marketId}</p>
          </div>
          <div className="rounded border border-white/15 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Model</p>
            <p className="mt-2 font-mono text-sm text-white">
              {functionSpaceMarket.integrationModel}
            </p>
          </div>
          <div className="rounded border border-white/15 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Signal</p>
            <p className="mt-2 font-mono text-sm text-white">{market.signalType}</p>
          </div>
        </div>

        <FunctionSpaceSdkWidgets market={market} functionSpaceMarket={functionSpaceMarket} />
      </div>
    </section>
  );
}
