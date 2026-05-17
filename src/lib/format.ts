export function formatUnits(value: bigint, decimals: number, precision = 2) {
  const negative = value < BigInt(0)
  const absolute = negative ? -value : value

  const base = BigInt(10) ** BigInt(decimals)

  const integer = absolute / base
  const fraction = absolute % base

  if (precision === 0) {
    return `${negative ? "-" : ""}${integer.toString()}`
  }

  const fractionString = fraction
    .toString()
    .padStart(decimals, "0")
    .slice(0, precision)

  return `${negative ? "-" : ""}${integer.toString()}.${fractionString}`
}
