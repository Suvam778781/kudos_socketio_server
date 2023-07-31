const moment = require("moment-timezone");

function getCurrentDateTime() {
  const timezone = "Asia/Kolkata"; // Set Kolkata as the default timezone

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const now = moment().tz(timezone);
  const month = months[now.month()];
  const dayOfWeek = days[now.day()];
  const hour = now.hour();
  const minute = now.minute();

  const amOrPm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;

  const result = `${month} ${now.year()} ${dayOfWeek} at ${formattedHour}:${minute.toString().padStart(2, '0')} ${amOrPm}`;

  return result;
}

// Example usage:

module.exports={getCurrentDateTime}
