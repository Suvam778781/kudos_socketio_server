function getCurrentDateTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
    return formattedDate;
  }
  

  module.exports={getCurrentDateTime}