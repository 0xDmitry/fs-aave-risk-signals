import Link from "next/link";
import { notFound } from "next/navigation";
import { FunctionSpaceMarketPanel } from "@/components/FunctionSpaceMarketPanel";
import { ReserveSnapshot } from "@/components/ReserveSnapshot";
import { StatusBadge } from "@/components/StatusBadge";
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
      <section className="mt-6 border-b border-line pb-8">
        <div className="mb-5 flex flex-wrap gap-2">
          <StatusBadge signalType={market.signalType} />
          <StatusBadge status={market.status} />
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {market.title}
            </h1>
            <p className="mt-3 text-xl text-slate-600">{market.subtitle}</p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
              {market.description}
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              functionSPACE ID
            </p>
            <p className="mt-3 font-mono text-4xl font-semibold text-ink">
              {market.functionSpaceMarketId}
            </p>
          </div>
        </div>
      </section>
      <div className="mt-8 grid gap-6">
        <ReserveSnapshot reserve={reserve} />
        <FunctionSpaceMarketPanel market={market} functionSpaceMarket={functionSpaceMarket} />
      </div>
    </main>
  );
}
