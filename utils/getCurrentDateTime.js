function getCurrentDateTime() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const now = new Date();
    const month = months[now.getMonth()];
    const dayOfWeek = days[now.getDay()];
    const hour = now.getHours();
    const minute = now.getMinutes();
  
    const amOrPm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
  
    const result = `${month} ${now.getFullYear()} ${dayOfWeek} at ${formattedHour}:${minute.toString().padStart(2, '0')} ${amOrPm}`;
  
    return result;
  }
  

  module.exports={getCurrentDateTime}