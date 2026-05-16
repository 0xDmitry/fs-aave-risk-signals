# Aave Risk Signals

Forward yield and reserve stress signals for Aave V3.

Aave Risk Signals is a functionSPACE competition demo that turns Aave V3 reserve risk into two forecastable markets. Instead of showing only current protocol data, it asks users to express forward views on what Aave V3 risk conditions are likely to become next.

This competition demo focuses on two signals that matter for Aave V3 market monitoring:

1. **Forward Supply Yield** — Aave V3 Ethereum USDC 30-Day Average Supply APY
2. **Forward Reserve Stress** — Aave V3 Ethereum WETH Reserve Month-End Utilization

## Markets

| Market                                             | Core question                                                         |
| -------------------------------------------------- | --------------------------------------------------------------------- |
| **Aave V3 Ethereum USDC — Forward Supply Yield**   | Aave V3 Ethereum USDC 30-Day Average Supply APY (May 8 – June 6 2026) |
| **Aave V3 Ethereum WETH — Forward Reserve Stress** | Aave V3 Ethereum WETH Reserve Utilization (Month-End May 2026)        |

Together, the two markets create a compact forward-risk surface for Aave V3: one side tracks yield pressure, the other tracks reserve capacity pressure.

Live demo markets:

- https://demo.functionspace.dev/trading/269
- https://demo.functionspace.dev/trading/270

## What the app does now

The current build is a frontend with live Aave V3 reserve metrics and embedded functionSPACE components.

It includes:

- A branded landing page for the two Aave V3 risk signals
- Live Aave V3 Ethereum reserve wired through `@aave/react`
- functionSPACE risk signal card widgets on the homepage
- functionSPACE risk signal trading widget on each detail page

## Product scope

This competition build is intentionally narrow:

- Two curated Aave V3 Ethereum markets
- Live Aave V3 reserve metrics for USDC and WETH
- functionSPACE-powered market display and trading UI

## Run locally

```bash
bun install
bun run dev
```
