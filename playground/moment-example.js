var moment = require('moment');

console.log(moment().format());

//unix epic
//January 1st 1970 @ 12:00am -> 0
//^^^ how timestamps work

var now = moment();

console.log('Current Timestamp', now.unix());

var timestamp = 1470234950;

var currMoment = moment.unix(timestamp);

console.log('current moment', currMoment.format('MMMM Do, YYYY @ H:mm A'));
