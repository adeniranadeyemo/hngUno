const utcTime = document.getElementById('time');
const utcDay = document.getElementById('day');

function updateUTCTimeAndDay() {
  const now = new Date();
  const day = now.getDate();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const ampm = `${hour > 12 ? 'pm' : 'am'}`;

  if (hour < 10) {
    utcTime.textContent = `0${hour}:${minutes} ${ampm}`;
  } else {
    utcTime.textContent = `${hour}:${minutes} ${ampm}`;
  }

  // prettier-ignore
  const daysOfTheWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];
  const utcDayString = daysOfTheWeek[day];

  utcDay.textContent = utcDayString;
}

updateUTCTimeAndDay();

setInterval(updateUTCTimeAndDay, 1000);
