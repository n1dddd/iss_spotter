const {fetchMyIP, fetchCoordsByIP} = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!\n", error.message);
//   } else {
//     console.log("It worked! Returned IP: ", ip);
//   }
// });
fetchCoordsByIP('72.140.98.168', (error,data) => {
  if (error) {
    console.log("It didn't work!\n", error.message);
    return;
  } else {
    console.log(data);
  }
});