const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`)
}

const fetchISSFlyOverTime = function(body) {
  const data = JSON.parse(body)
  const location = {
    latitude: data.latitude,
    longitude: data.longitude
  }
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${location.latitude}&lon=${location.longitude}`)
}

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTime)
  .then((data) => {
    const { response } = JSON.parse(data);
    return response;
  });
};

module.exports = {
  nextISSTimesForMyLocation
}