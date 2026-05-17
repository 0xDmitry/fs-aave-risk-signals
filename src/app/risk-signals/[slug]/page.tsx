import { notFound } from "next/navigation"

import { RiskSignal } from "@/components/RiskSignal"
import { riskSignals } from "@/config/risk-signals"

type MarketDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return riskSignals.map((riskSignal) => ({
    slug: riskSignal.slug,
  }))
}

export async function generateMetadata({ params }: MarketDetailPageProps) {
  const { slug } = await params
  const riskSignal = riskSignals.find((riskSignal) => riskSignal.slug === slug)

  return {
    title: riskSignal
      ? `${riskSignal.title} | Aave Risk Signals`
      : "Market not found",
  }
}

export default async function RiskSignalDetailPage({
  params,
}: MarketDetailPageProps) {
  const { slug } = await params
  const riskSignal = riskSignals.find((riskSignal) => riskSignal.slug === slug)

  if (!riskSignal) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-6xl py-10 md:px-5">
      <RiskSignal riskSignal={riskSignal} />
    </main>
  )
}
