const { DateTime } = require("luxon");

const getTimeUntil = (time) => {
  let lunchTime = DateTime.local().set({ hour: time.substr(0, 2), minute: time.substr(3, 5) })
  let difference = lunchTime.diffNow('minutes').plus({ minutes: 240 });
  console.log(lunchTime.diffNow('minutes'))
  return difference.toFormat("HH 'hours and' mm 'minutes'");
}

module.exports = {
  getTimeUntil: getTimeUntil
}