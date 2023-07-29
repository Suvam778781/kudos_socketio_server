const { v4: uuidv4 } = require('uuid');
function generateClientId(name, email) {
  return uuidv4();
  }
  module.exports={generateClientId}