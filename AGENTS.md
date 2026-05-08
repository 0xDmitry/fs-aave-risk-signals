# AGENTS.md

This repo is for the Aave Risk Signals MVP.

## Build goals
- Use Next.js + TypeScript + Tailwind
- Keep the app frontend-only for now
- Use mock local data
- Keep architecture simple and modular

## Architecture rules
- Separate:
  - UI components
  - mock data
  - market config
  - adapters
  - services
- Keep all market definitions in one config/module
- Add clear TODO comments for future functionSPACE integration points
- Add clear TODO comments for future Aave data ingestion points

## Avoid
- No auth
- No backend
- No database
- No wallet integration
- No production trading logic
- No unnecessary animations
- No overengineering

## UX
- Minimal
- Sharp
- Credible
- Prediction-market-inspired

## Deliverables
- Landing page
- Markets list page
- Market detail page
- Market/trade section with real functionSPACE integration boundary
- README with setup instructions
