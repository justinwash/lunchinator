const { DateTime } = require("luxon");

const getTimeUntil = (time) => {
  let lunchTime = DateTime.local().set({ hour: time.substr(0, 2), minute: time.substr(3, 5) })
  let difference = lunchTime.diffNow('minutes').plus({ hours: 4 });
  console.log(lunchTime.diffNow('minutes'))
  console.log(difference.toObject())
  return difference.toISO();
}

module.exports = {
  getTimeUntil: getTimeUntil
}