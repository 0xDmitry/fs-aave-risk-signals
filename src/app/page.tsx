import Link from "next/link";
import { MarketCard } from "@/components/MarketCard";
import { listMarkets } from "@/services/markets";

export default function HomePage() {
  const markets = listMarkets();

  return (
    <main>
      <section className="market-grid border-b border-line bg-white">
        <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-signal">
              functionSPACE competition demo
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-ink md:text-7xl">
              Aave Risk Signals
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Forward yield and reserve stress signals for Aave, mapped to live
              functionSPACE market IDs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/markets"
                className="inline-flex h-11 items-center rounded bg-ink px-5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                View markets
              </Link>
              <a
                href="https://demo.functionspace.org"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded border border-line bg-white px-5 text-sm font-semibold text-ink hover:border-ink"
              >
                functionSPACE demo
              </a>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-panel p-4 shadow-sm">
            <div className="rounded border border-line bg-white p-4">
              <div className="flex items-center justify-between border-b border-line pb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                <span>Signal terminal</span>
                <span>Ethereum</span>
              </div>
              <div className="mt-4 space-y-3">
                {markets.map((market) => (
                  <div
                    key={market.id}
                    className="grid grid-cols-[1fr_auto] gap-4 rounded border border-line p-4"
                  >
                    <div>
                      <p className="font-semibold text-ink">{market.title}</p>
                      <p className="mt-1 text-sm text-slate-500">{market.subtitle}</p>
                    </div>
                    <div className="text-right font-mono text-sm text-signal">
                      #{market.functionSpaceMarketId}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
              Configured markets
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">Initial Aave signal set</h2>
          </div>
          <Link href="/markets" className="text-sm font-semibold text-ink hover:text-aave">
            See all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {markets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      </section>
    </main>
  );
}
