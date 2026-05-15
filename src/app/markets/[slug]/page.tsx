import Link from "next/link";
import { notFound } from "next/navigation";
import { FunctionSpaceMarketPanel } from "@/components/FunctionSpaceMarketPanel";
import { MarketDetailHeader } from "@/components/MarketDetailHeader";
import { ReserveSnapshot } from "@/components/ReserveSnapshot";
import { listMarkets, getMarketDetail } from "@/services/markets";

type MarketDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return listMarkets().map((market) => ({
    slug: market.slug,
  }));
}

export async function generateMetadata({ params }: MarketDetailPageProps) {
  const { slug } = await params;
  const detail = await getMarketDetail(slug);

  return {
    title: detail ? `${detail.market.title} | Aave Risk Signals` : "Market not found",
  };
}

export default async function MarketDetailPage({ params }: MarketDetailPageProps) {
  const { slug } = await params;
  const detail = await getMarketDetail(slug);

  if (!detail) {
    notFound();
  }

  const { market, reserve, functionSpaceMarket } = detail;

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <Link href="/markets" className="text-sm font-semibold text-slate-500 hover:text-ink">
        Back to markets
      </Link>
      <div className="mt-6">
        <MarketDetailHeader market={market} functionSpaceMarket={functionSpaceMarket} />
      </div>
      <div className="mt-8 grid gap-6">
        <FunctionSpaceMarketPanel market={market} functionSpaceMarket={functionSpaceMarket} />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ReserveSnapshot reserve={reserve} />
          <section className="rounded-lg border border-line bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              Resolution rule
            </p>
            <h2 className="mt-3 text-xl font-semibold text-ink">{market.subtitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {market.resolutionRuleSummary}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
