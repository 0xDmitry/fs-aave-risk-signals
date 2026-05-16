import { getMarketBySlug, markets } from "@/config/markets"

export function getMarkets() {
  return markets
}

export async function getMarket(slug: string) {
  const market = getMarketBySlug(slug)

  if (!market) {
    return null
  }

  return market
}
