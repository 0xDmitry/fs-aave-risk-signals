"use client"

import Link from "next/link"

import { RiskSignalCardWidget } from "@/components/widgets/RiskSignalCardWidget"
import { riskSignals } from "@/config/risk-signals"

export function RiskSignals() {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">
            markets
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Two forward Aave V3 risk markets
          </h2>

          <p className="text-ink-muted mt-4 text-base leading-7">
            Aave Risk Signals is a functionSPACE competition demo that turns
            Aave V3 reserve risk into two forecastable markets. Instead of
            showing only current protocol data, it asks users to express forward
            views on what Aave V3 risk conditions are likely to become next.
          </p>
        </div>

        <div className="flex-items-stretch mx-auto mt-10 flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:flex-wrap lg:gap-5">
          {riskSignals.map((riskSignal) => (
            <Link
              key={riskSignal.functionSpaceMarketId}
              href={`/risk-signals/${riskSignal.slug}`}
              className="flex-items-stretch flex min-h-[403px] w-full basis-[calc(50%-1rem)] outline-none transition hover:-translate-y-1"
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
