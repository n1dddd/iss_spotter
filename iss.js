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
    } else if (!error) {
      const data = JSON.parse(body);
      callback(error,data.ip);
      userIP = data.ip;
    }
  });
};
const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error,null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
    } else if (!error) {
      const data = JSON.parse(body);
      if (data.success === false) {
        const msg = `Error: Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${ip}`;
        callback(Error(msg),null);
        return;
      } else {
        const location = {
          latitude: data.latitude,
          longitude: data.longitude
        };
        callback(error,location);
      }
    }
  });
};
module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};
