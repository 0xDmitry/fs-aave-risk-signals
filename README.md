# Aave Risk Signals

Forward yield and reserve stress signals for Aave.

This is a frontend-only MVP scaffold for the functionSPACE competition. It presents a small branded interface for Aave-related prediction markets and keeps all live integration work behind a narrow adapter boundary.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Bun

## MVP scope

This competition build is intentionally narrow:

- Frontend only
- Local mock data until live Aave/functionSPACE reads are connected
- No wallet integration
- No auth
- No backend
- No database
- No production trading logic

Product principles:

- Minimal, sharp, and credible
- Easy to demo
- Prediction-market-inspired
- Configurable from a single market metadata file
- Simple adapter layer for future Aave data and functionSPACE SDK integration

## Run locally

```bash
bun install
bun run dev
```

Open http://localhost:3000.

Useful checks:

```bash
bun run typecheck
bun run build
```

## App routes

- `/` - landing page
- `/markets` - configured markets list
- `/markets/aave-ethereum-usdc-30d-supply-apy` - USDC market detail
- `/markets/aave-ethereum-weth-month-end-utilization` - WETH market detail

## Configured markets

Project-specific market metadata lives in one file:

- `src/config/markets.ts`

Initial functionSPACE demo market mappings:

- Aave Ethereum USDC 30-day supply APY: `functionSpaceMarketId: 269`
- Aave Ethereum WETH month-end utilization: `functionSpaceMarketId: 270`

Supported market config fields include:

- `id`
- `slug`
- `title`
- `subtitle`
- `description`
- `signalType`
- `functionSpaceMarketId`
- `resolutionRuleSummary`
- `status`

## Architecture

- `src/app` - Next.js routes and page composition
- `src/components` - reusable UI components
- `src/config` - editable project market configuration
- `src/adapters` - external provider boundaries
- `src/services` - app-facing market read functions
- `src/mock-data` - temporary local Aave reserve context
- `src/types` - shared TypeScript contracts

## functionSPACE integration

functionSPACE-specific code lives here:

- `src/adapters/functionspace.ts`
- `src/components/FunctionSpaceMarketPanel.tsx`

The current adapter maps local market entries to functionSPACE demo market URLs and preserves a clear SDK boundary. Live consensus data, probability curves, embedded market UI, and simulated trading should be connected inside this adapter/component boundary when SDK or embed instructions are available.

## Aave data integration

Temporary local reserve context lives here:

- `src/mock-data/aave-reserves.ts`

Replace this with live Aave reserve data when the MVP moves beyond local demo data.

## Current blocker

The app does not render live functionSPACE market UI or submit trades yet because no SDK package, embed contract, or API instructions are included in this repo. The two functionSPACE market IDs are wired into config and exposed through the adapter so live integration can be added without changing route structure.
