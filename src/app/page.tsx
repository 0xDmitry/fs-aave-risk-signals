import { Hero } from "@/components/Hero"
import { RiskSignals } from "@/components/RiskSignals"

export default function HomePage() {
  return (
    <main className="bg-panel">
      <Hero />
      <RiskSignals />
    </main>
  )
}
