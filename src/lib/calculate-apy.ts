type ApyAvgRate = {
  decimals: number
  formatted: string
  raw: string
  value: string
}

type ApyHistoryPoint = {
  date: string
  avgRate: ApyAvgRate
}

export function calculateTimeWeightedAverageApy(
  points: ApyHistoryPoint[],
  start: number,
  end: number,
) {
  const normalized = points
    .map((point) => {
      if (!point.date || !point.avgRate.formatted) {
        return null
      }

      return {
        timestamp: new Date(point.date).getTime(),
        avgRate: point.avgRate,
      }
    })
    .filter((point): point is { timestamp: number; avgRate: ApyAvgRate } =>
      Boolean(point),
    )
    .sort((a, b) => a.timestamp - b.timestamp)

  const windowPoints = normalized.filter(
    (point) => point.timestamp >= start && point.timestamp <= end,
  )

  if (windowPoints.length === 0) {
    return null
  }

  if (windowPoints.length === 1) {
    return BigInt(windowPoints[0].avgRate.raw)
  }

  let weightedSum = BigInt(0)
  let totalDuration = BigInt(0)

  for (let i = 0; i < windowPoints.length; i++) {
    const current = windowPoints[i]
    const next = windowPoints[i + 1]

    const from = Math.max(current.timestamp, start)
    const to = next ? Math.min(next.timestamp, end) : end

    const duration = BigInt(to - from)

    if (duration > 0) {
      weightedSum += BigInt(current.avgRate.raw) * duration
      totalDuration += duration
    }
  }

  if (totalDuration === BigInt(0)) {
    return null
  }

  return weightedSum / totalDuration
}
