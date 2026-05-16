import { notFound } from "next/navigation"
import { getMarkets, getMarket } from "@/services/markets"
import { Market } from "@/components/Market"

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
  const market = await getMarket(slug)

  return {
    title: market ? `${market.title} | Aave Risk Signals` : "Market not found",
  }
}

export default async function MarketDetailPage({
  params,
}: MarketDetailPageProps) {
  const { slug } = await params
  const market = await getMarket(slug)

  if (!market) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <Market market={market} />
    </main>
  )
}
