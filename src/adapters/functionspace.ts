import type { FunctionSpaceMarketReference, MarketConfig } from "@/types/market"

const FUNCTIONSPACE_DEMO_TRADING_BASE_URL =
  "https://demo.functionspace.dev/trading"
const FUNCTIONSPACE_API_BASE_URL = "https://fs-engine-api.onrender.com"

export function createFunctionSpaceMarketReference(
  market: Pick<MarketConfig, "functionSpaceMarketId" | "externalMarketUrl">,
): FunctionSpaceMarketReference {
  const externalUrl =
    market.externalMarketUrl ??
    `${FUNCTIONSPACE_DEMO_TRADING_BASE_URL}/${market.functionSpaceMarketId}`

  return {
    provider: "functionSPACE",
    marketId: market.functionSpaceMarketId,
    externalUrl,
    apiBaseUrl: FUNCTIONSPACE_API_BASE_URL,
    integrationModel: "sdk-widgets",
    status: "sdk-widgets-live",
  }
}

export async function getFunctionSpaceMarketReference(
  market: Pick<MarketConfig, "functionSpaceMarketId" | "externalMarketUrl">,
) {
  // TODO[functionSPACE SDK]: Move this base URL into environment config when the
  // competition deployment target is finalized.
  return createFunctionSpaceMarketReference(market)
}

export async function connectFunctionSpaceTrading() {
  // TODO[functionSPACE SDK]: Add project-specific auth/session handling if native
  // trading should happen inside this app instead of on the external demo page.
  return {
    enabled: false,
    reason:
      "functionSPACE widgets are mounted in guest mode; authenticated trade submission is not configured by this app.",
  }
}
