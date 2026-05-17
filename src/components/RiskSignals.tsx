"use client"

import Link from "next/link"

import { RiskSignalCardWidget } from "@/components/widgets/RiskSignalCardWidget"
import { riskSignals } from "@/config/risk-signals"

export function RiskSignals() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
            markets
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Two forward Aave V3 risk markets
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Aave Risk Signals is a functionSPACE competition demo that turns
            Aave V3 reserve risk into two forecastable markets. Instead of
            showing only current protocol data, it asks users to express forward
            views on what Aave V3 risk conditions are likely to become next.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:gap-5">
          {riskSignals.map((riskSignal) => (
            <Link
              key={riskSignal.functionSpaceMarketId}
              href={`/risk-signals/${riskSignal.slug}`}
              className="block rounded-2xl outline-none transition hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
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
