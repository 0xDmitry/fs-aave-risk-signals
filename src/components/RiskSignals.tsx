"use client"

import Link from "next/link"

import { RiskSignalCardWidget } from "@/components/widgets/RiskSignalCardWidget"
import { riskSignals } from "@/config/risk-signals"

export function RiskSignals() {
  return (
    <section className="bg-panel">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
            markets
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Two forward Aave V3 risk markets
          </h2>

          <p className="mt-4 text-base leading-7 text-ink-muted">
            Aave Risk Signals is a functionSPACE competition demo that turns
            Aave V3 reserve risk into two forecastable markets. Instead of
            showing only current protocol data, it asks users to express forward
            views on what Aave V3 risk conditions are likely to become next.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 items-stretch justify-stretch gap-5 md:gap-7 lg:mt-14 lg:max-w-6xl lg:grid-cols-2 lg:gap-8">
          {riskSignals.map((riskSignal) => (
            <Link
              key={riskSignal.functionSpaceMarketId}
              href={`/risk-signals/${riskSignal.slug}`}
              className="items-stretch justify-stretch outline-none transition hover:-translate-y-1 [&>*]:flex [&>*]:h-full [&>*]:w-full [&>*]:flex-1 [&>*]:items-stretch [&>*]:justify-stretch"
            >
              <RiskSignalCardWidget
                marketId={riskSignal.functionSpaceMarketId}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
