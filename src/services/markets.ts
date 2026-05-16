import { getFunctionSpaceMarketReference } from "@/adapters/functionspace"
import { aaveReserveSnapshots } from "@/mock-data/aave-reserves"
import { getMarketBySlug, markets } from "@/config/markets"

export function listMarkets() {
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
    functionSpaceMarket: await getFunctionSpaceMarketReference(market),
  }
}
