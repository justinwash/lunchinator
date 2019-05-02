const showTime = (timestamp) => {
  if (typeof timestamp !== 'number') return 'NaN'

  const SECOND = 1000
  const MINUTE = 1000 * 60
  const HOUR = 1000 * 60 * 60
  const DAY = 1000 * 60 * 60 * 24
  const MONTH = 1000 * 60 * 60 * 24 * 30
  const YEAR = 1000 * 60 * 60 * 24 * 30 * 12

  const elapsed = (new Date().getTime() - 4.5 * 60 * 60 * 1000) - timestamp

  if (elapsed <= 0) return null

  if (elapsed <= MINUTE) return `${Math.round(elapsed / SECOND)}s`
  if (elapsed <= HOUR) return `${Math.round(elapsed / MINUTE)}m`
  if (elapsed <= DAY) return `${Math.round(elapsed / HOUR)}h`
  if (elapsed <= MONTH) return `${Math.round(elapsed / DAY)}d`
  if (elapsed <= YEAR) return `${Math.round(elapsed / MONTH)}mo`
  return `${Math.round(elapsed / YEAR)}y`
}

const getTimeUntil = (hour, minutes) => {
  let currentTime = new Date().getTime();
  let difference = (new Date().setHours(hour, minutes)) - currentTime;
  return getTimeFromMilliseconds(difference);
}

const getTimeFromMilliseconds = (duration) => {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

module.exports = {
  showTime: showTime,
  getTimeUntil: getTimeUntil
}