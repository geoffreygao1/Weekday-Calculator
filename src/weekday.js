export default function Dates() {
  this.longDate = "";
  this.weekday = "";
}

// YYYY-MM-DD

Dates.prototype.getDay = function () {
  const date1 = new Date(this.longDate);
  const dateArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  this.weekday = dateArray[date1.getDay()];
};