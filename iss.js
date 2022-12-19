const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      callback(error,null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
    }
    else if (!error) {
      const data = JSON.parse(body);
      callback(error,data.ip);
    };
  });
};
module.exports = {
  fetchMyIP
};
