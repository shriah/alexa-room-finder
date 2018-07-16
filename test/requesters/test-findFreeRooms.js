
const requesters = require('../../lambda/requesters');
const config = require('../test-config');

console.log('\n----- findFreeRoom ----- \n');

requesters.findFreeRooms(config.token, "2018-07-13T16:00:00.0000000", "2018-07-13T17:00:00.0000000")
.then((parsedCals) => {
  console.log(parsedCals);
}, (calError) => {
  console.error('An error occurred while getting calendars in findFreeRoom: \n');
  console.error(calError);
});
