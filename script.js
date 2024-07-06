const timeUTC = document.getElementById('time');
const dayUTC = document.getElementById('day');

function updateUTC() {
  const now = new Date();
  const day = now.getDate();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const ampm = `${hour > 12 ? 'pm' : 'am'}`;

  timeUTC.textContent = `${hour < 10 ? `0${hour}` : hour}:${minutes} ${ampm}`;

  // hour < 10
  //   ? (timeUTC.textContent = `0${hour}:${minutes} ${ampm}`)
  //   : (timeUTC.textContent = `${hour}:${minutes} ${ampm}`);

  // prettier-ignore
  const daysOfTheWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];
  const dayUTCString = daysOfTheWeek[day];

  dayUTC.textContent = dayUTCString;
}

updateUTC();

setInterval(updateUTC, 1000);
