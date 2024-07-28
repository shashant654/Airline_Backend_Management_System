function compareTime(timeString1, timeString2) {
  let dateTime1 = new Date(timeString1);
  let dateTIme2 = new Date(timeString2);
  return dateTime1.getTime() > dateTIme2.getTime();
}

module.exports = {
  compareTime,
};
