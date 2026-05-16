import { notFound } from "next/navigation"
import { FSAaveRiskSignalsWidget } from "@/components/FSAaveRiskSignalsWidget"
import { ReserveSnapshot } from "@/components/ReserveSnapshot"
import { getMarkets, getMarketDetail } from "@/services/markets"

type MarketDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getMarkets().map((market) => ({
    slug: market.slug,
  }))
}

export async function generateMetadata({ params }: MarketDetailPageProps) {
  const { slug } = await params
  const detail = await getMarketDetail(slug)

  return {
    title: detail
      ? `${detail.market.title} | Aave Risk Signals`
      : "Market not found",
  }
}

export default async function MarketDetailPage({
  params,
}: MarketDetailPageProps) {
  const { slug } = await params
  const detail = await getMarketDetail(slug)

  if (!detail) {
    notFound()
  }

  const { market, reserve } = detail

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="mt-8 grid gap-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ReserveSnapshot reserve={reserve} />
        </div>
        <FSAaveRiskSignalsWidget market={market} />
      </div>
    </main>
  )
}
