const { nextISSTimesForMyLocation } = require('./iss_promised');
const { flyOverDateAndTime } = require('./index');

nextISSTimesForMyLocation()
  .then((passTimes)=> {
    return flyOverDateAndTime(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  })

