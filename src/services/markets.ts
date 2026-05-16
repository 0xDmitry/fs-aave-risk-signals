import { aaveReserveSnapshots } from "@/mock-data/aave-reserves"
import { getMarketBySlug, markets } from "@/config/markets"

export function getMarkets() {
  return markets
}

export async function getMarketDetail(slug: string) {
  const market = getMarketBySlug(slug)

  if (!market) {
    return null
  }

  return {
    market,
    reserve: aaveReserveSnapshots[market.reserveSymbol],
  }
}
