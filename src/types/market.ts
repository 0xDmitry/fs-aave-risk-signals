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
  externalMarketUrl: string;
  resolutionRuleSummary: string;
  status: MarketStatus;
  reserveSymbol: "USDC" | "WETH";
};

export type FunctionSpaceMarketReference = {
  provider: "functionSPACE";
  marketId: number;
  externalUrl: string;
  apiBaseUrl: string;
  integrationModel: "sdk-widgets";
  status: "sdk-widgets-live" | "sdk-pending";
};

export type AaveReserveSnapshot = {
  symbol: string;
  network: string;
  currentMetricLabel: string;
  currentMetricValue: string;
  context: string;
};
