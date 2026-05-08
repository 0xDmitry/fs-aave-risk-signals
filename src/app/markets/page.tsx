import { MarketCard } from "@/components/MarketCard";
import { listMarkets } from "@/services/markets";

export const metadata = {
  title: "Markets | Aave Risk Signals",
};

export default function MarketsPage() {
  const markets = listMarkets();

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-8 border-b border-line pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-signal">
          Markets
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-ink">Aave signal markets</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Project-defined markets are configured locally and mapped to functionSPACE demo market IDs.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {markets.map((market) => (
          <MarketCard key={market.id} market={market} />
        ))}
      </div>
    </main>
  );
}
