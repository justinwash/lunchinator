const { DateTime } = require('luxon');

const dayCheck = {
  Thursday: 0,
  Friday: 6,
  Saturday: 5,
  Sunday: 4,
  Monday: 3,
  Tuesday: 2,
  Wednesday: 1
}

const getTimeUntil = (time) => {
  let lunchTime = DateTime.local().set({ hour: time.substr(0, 2), minute: time.substr(3, 5) })
  let difference = lunchTime.diffNow('minutes');
  console.log(lunchTime.diffNow('minutes'))
  return difference.hours ? difference.toFormat("HH 'hours and' mm 'minutes'") : difference.toFormat("mm 'minutes'")
}

const getTimeUntilTekken = (tekkenTime) => {
  let fullDate = DateTime.local().toLocaleString(DateTime.DATETIME_HUGE).replace(/\s/g, '');
  let dateArray = fullDate.split(",");
  let daysUntil = dayCheck[dateArray[0]];
  let timeUntil = 0;

  if (daysUntil > 0) {
    timeUntil = 1000;
  }

  return { days: daysUntil, time: timeUntil }
}

const sooshDay = (today) => {
  var dayOfMonth = today.getDate(); // 1-31
  var dayOfWeek = today.getDay(); // 0 = Sunday

  // No weekends
  if (dayOfWeek == 0 || dayOfWeek == 6) {
    return false;
  }
  // Date is 1 or 15 and not a weekend: sushi time
  if (dayOfMonth == 1 || dayOfMonth == 15) {
    return true;
  }
  // Date is 2 or 16 and dayOfWeek is Monday
  if ((dayOfMonth == 2 || dayOfMonth == 16) && (dayOfWeek == 1)) {
    return true;
  }
  // Date is 3 or 17 and dayOfWeek is Monday
  if ((dayOfMonth == 3 || dayOfMonth == 17) && (dayOfWeek == 1)) {
    return true;
  }

  return false
}

module.exports = {
  getTimeUntil: getTimeUntil,
  getTimeUntilTekken: getTimeUntilTekken,
  sooshDay: sooshDay
}
