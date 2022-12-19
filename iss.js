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
      const ip = data.ip;
      return callback(null,ip);
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
const fetchISSFlyOverTime = function(loc,callback) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${loc.latitude}&lon=${loc.longitude}`, (error,response,body) => {
    if (error) {
      callback(error,null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
    } else if (!error) {
      const passes = JSON.parse(body).response;
      callback(null,passes);
    }
  });
};
const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error,null);
    }

    fetchCoordsByIP(ip, (error,loc) => {
      if (error) {
        return callback(error,null);
      }
      fetchISSFlyOverTime(loc, (error, passes) => {
        if (error) {
          return callback(error,null);
        }
        callback(null,passes);
      });
    });
  });
};


module.exports = {
  nextISSTimesForMyLocation
};
