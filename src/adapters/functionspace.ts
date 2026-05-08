import type { FunctionSpaceMarketReference, MarketConfig } from "@/types/market";

const FUNCTIONSPACE_DEMO_BASE_URL = "https://demo.functionspace.org";

export function createFunctionSpaceMarketReference(
  market: Pick<MarketConfig, "functionSpaceMarketId">,
): FunctionSpaceMarketReference {
  return {
    provider: "functionSPACE",
    marketId: market.functionSpaceMarketId,
    embedUrl: `${FUNCTIONSPACE_DEMO_BASE_URL}/markets/${market.functionSpaceMarketId}`,
    status: "sdk-pending",
  };
}

export async function getFunctionSpaceMarketReference(
  market: Pick<MarketConfig, "functionSpaceMarketId">,
) {
  // TODO[functionSPACE SDK]: Replace this reference object with SDK-backed market
  // reads for probability curve, liquidity, latest consensus, and market status.
  return createFunctionSpaceMarketReference(market);
}

export async function connectFunctionSpaceTrading() {
  // TODO[functionSPACE SDK]: Wire real simulated Probability Market trade actions here.
  // Keep wallet/auth concerns out until the competition integration requires them.
  return {
    enabled: false,
    reason: "functionSPACE SDK trading integration is not connected yet.",
  };
}
