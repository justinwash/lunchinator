const { DateTime } = require("luxon");

const getTimeUntil = (time) => {
  let lunchTime = DateTime.local({ hour: time.substr(0, 2), minute: time.substr(3, 5) })
  let difference = lunchTime.diffNow('minutes');
  console.log(lunchTime.diffNow('minutes'))
  return difference.toISO();
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
  getTimeUntil: getTimeUntil
}