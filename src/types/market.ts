export type MarketStatus = "active" | "pending" | "resolved";

export type SignalType = "forward-yield" | "reserve-stress";

export type MarketConfig = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  signalType: SignalType;
  functionSpaceMarketId: number;
  resolutionRuleSummary: string;
  status: MarketStatus;
  reserveSymbol: "USDC" | "WETH";
};

export type FunctionSpaceMarketReference = {
  provider: "functionSPACE";
  marketId: number;
  embedUrl: string;
  status: "configured" | "sdk-pending";
};

export type AaveReserveSnapshot = {
  symbol: string;
  network: string;
  currentMetricLabel: string;
  currentMetricValue: string;
  context: string;
};
