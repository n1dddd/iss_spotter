const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTime} = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!\n", error.message);
//   } else {
//     console.log("It worked! Returned IP: ", ip);
//   }
// });
// fetchCoordsByIP('72.140.98.168', (error,data) => {
//   if (error) {
//     console.log("It didn't work!\n", error.message);
//     return;
//   } else {
//     console.log(data);
//   }
// });

// const coords = {latitude: 45.5016889, longitude: -73.567256}

// fetchISSFlyOverTime(coords, (error,data) => {
//   if (error) {
//     console.log("It didn't work!\n", error.message);
//     return;
//   } else {
//     console.log(data);
//   }
// })
