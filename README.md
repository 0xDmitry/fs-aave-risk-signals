# Aave Risk Signals

**Forward yield and reserve stress signals for Aave**

Aave Risk Signals is a functionSPACE-powered widget that brings forward-looking market consensus into the Aave reserve experience.

Instead of showing only current reserve conditions, it adds live signals for where yield and reserve stress may be going next.

The MVP focuses on two Aave Ethereum markets:

- **USDC** — 30-day average supply APY over the next 30 full UTC days
- **WETH** — month-end utilization

## Why this exists

DeFi interfaces are good at showing the current state of a market: APY, utilization, liquidity, and reserve status.

But users often need a different layer of information:

- is the current yield likely to persist?
- is reserve tightness likely to worsen?
- are today’s conditions temporary or sustainable?

Aave Risk Signals adds that missing layer through live market-implied forward signals.

## What it does

For each tracked reserve, the widget shows:

- the current Aave metric
- the expected forward value
- the most likely range
- a simple plain-English interpretation of market consensus

Users can also express a view through a simplified forecast trading interface built on top of functionSPACE’s simulated Probability Market environment.

## Included markets

### 1) Aave Ethereum USDC
**Forecast:** 30-day average supply APY over the next 30 full UTC days

### 2) Aave Ethereum WETH
**Forecast:** month-end utilization

## Why Aave

Aave is a strong fit because its reserve surfaces already expose the core data needed for this use case, including reserve context and historical APY data.

That makes it possible to anchor forward signals in real protocol state instead of presenting the market as an abstract forecasting layer.

## Why functionSPACE

functionSPACE is a strong fit because this product is about forecasting **continuous outcomes**, not yes/no events.

Future APY and future utilization are naturally range-based questions. functionSPACE’s Probability Market is built around beliefs expressed as curves over a numerical range, which makes it a better fit than fragmented binary markets for this kind of signal layer.

## Scope

This competition build is intentionally narrow.

### In scope

- Aave reserve widget UI
- two forward markets
- market detail views
- simplified forecast trading interaction
- live consensus-driven signals

### Out of scope

- rewards and leaderboard
- real-money settlement
- onchain resolution
- sponsor incentive mechanics
- multi-protocol support
- full terminal/dashboard product

## High-level architecture

- **Aave** provides the underlying reserve context
- **functionSPACE** provides the forecasting market primitive
- **Aave Risk Signals** translates both into an embedded decision-support layer