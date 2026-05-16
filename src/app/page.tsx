"use client"

import Link from "next/link"

import { RiskSignalCardWidget } from "@/components/widgets/RiskSignalCardWidget"
import { riskSignals } from "@/config/risk-signals"

export default function HomePage() {
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
              Forward yield and reserve stress signals for Aave
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://demo.functionspace.dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded border border-line bg-white px-5 text-sm font-semibold text-ink hover:border-ink"
              >
                functionSPACE demo
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {riskSignals.map((riskSignal) => (
              <Link
                key={riskSignal.functionSpaceMarketId}
                href={`/risk-signals/${riskSignal.slug}`}
              >
                <RiskSignalCardWidget
                  marketId={riskSignal.functionSpaceMarketId}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
