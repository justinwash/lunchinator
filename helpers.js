const showTime = (timestamp) => {
  if (typeof timestamp !== 'number') return 'NaN'

  const SECOND = 1000
  const MINUTE = 1000 * 60
  const HOUR = 1000 * 60 * 60
  const DAY = 1000 * 60 * 60 * 24
  const MONTH = 1000 * 60 * 60 * 24 * 30
  const YEAR = 1000 * 60 * 60 * 24 * 30 * 12

  const elapsed = (new Date().getTime()) - timestamp - 4 * 60 * 60 * 1000

  if (elapsed <= 0) return null

  if (elapsed <= MINUTE) return `${Math.round(elapsed / SECOND)}s`
  if (elapsed <= HOUR) return `${Math.round(elapsed / MINUTE)}m`
  if (elapsed <= DAY) return `${Math.round(elapsed / HOUR)}h`
  if (elapsed <= MONTH) return `${Math.round(elapsed / DAY)}d`
  if (elapsed <= YEAR) return `${Math.round(elapsed / MONTH)}mo`
  return `${Math.round(elapsed / YEAR)}y`
}

module.exports = showTime;