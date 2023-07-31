function getCurrentDateTime() {
    const currentDate = new Date();
  
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
  
    const monthName = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = ('0' + currentDate.getDate()).slice(-2);
    const hour = ('0' + currentDate.getHours()).slice(-2);
    const minute = ('0' + currentDate.getMinutes()).slice(-2);
    const period = currentDate.getHours() >= 12 ? 'PM' : 'AM';
  
    const formattedDateTime = `${monthName} ${year} ${dayOfWeek} at ${hour}:${minute} ${period}`;
  
    return formattedDateTime;
  
  }
  

  module.exports={getCurrentDateTime}