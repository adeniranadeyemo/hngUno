const timeUTC = document.querySelector('#time');

const dayUTC = document.querySelector('#day');
console.log(dayUTC);

function updateUTC() {
  const now = new Date();
  const day = now.getDate();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const ampm = `${hour >= 12 ? 'pm' : 'am'}`;

  timeUTC.textContent = `
    ${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }${ampm}`;

  // prettier-ignore
  const daysOfTheWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];
  const dayUTCString = daysOfTheWeek[day];

  dayUTC.textContent = dayUTCString;
}

setInterval(updateUTC, 1000);
