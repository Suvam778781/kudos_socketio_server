const crypto =require("crypto")
function generateClientId(name, email) {
    const hash = crypto.createHash('md5');
    const clientId = hash.update(`${name}_${email}`).digest('hex');
    return clientId;
  }


  module.exports={generateClientId}