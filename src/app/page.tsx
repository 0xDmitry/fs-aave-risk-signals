import { Hero } from "@/components/Hero"
import { RiskSignals } from "@/components/RiskSignals"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <RiskSignals />
    </main>
  )
}
