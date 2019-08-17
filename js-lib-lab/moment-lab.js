/*---- The following exercises were completed using Node ----*/
const moment = require("moment");
const mom = moment();
// Use the moment() method to create a new date; 
// also create several other dates by parsing various strings.
// Add additional statement to print the values of the dates:

// 1
console.log(mom.format('YYYY MM DD')); // 2019 08 17
// 2
console.log(mom.format("dddd, MMMM Do YYYY, h:mm:ssa")); // Saturday, August 17th 2019, 12:26:17pm
// 3
const momISO = moment("2019-02-08 09:30");
console.log(momISO.format()); // 2019-02-08T09:30:00-05:00
// 4
const rfc = moment("22 Mar 2017 21:22:23 GMT");
console.log(rfc.format()); // 2017-03-22T17:22:23-04:00
// 5
console.log(mom.format('MMM Do YY')); // Aug 17th 19

// Using the values in the chart, print a date in the following formats:
// Long day, short month, day number, year and time 
console.log('\nDate format: Long day, short month, day number, year and time')
console.log(mom.format('dddd, MMM D YYYY, h:mma')); // Saturday, Aug 17 2019, 12:50pm

// Short month, day, year, and time
console.log('\nDate format: Short month, day, year, and time')
console.log(mom.format('MMM D YYYY h:mma')); // Aug 17 2019 12:52pm

// Week of year, short year
console.log('\nDate format: Week of year, short year')
console.log(mom.format('wo YY')); // 33rd 19

// Quarter of year, long year.
console.log('\nDate format: Quarter of year, long year')
console.log(mom.format('Qo YYYY')); // 3rd 2019

// Using the difference function, find the difference 
// between the ISO and rfc dates in days, weeks, and months. 
console.log('\nDifference (rounded) between the ISO and rfc dates in days, weeks, and months');
console.log(momISO.diff(rfc, 'days')); // 687 days (Current date: Aug 17, 2019)
console.log(momISO.diff(rfc, 'weeks')); // 98 weeks
console.log(momISO.diff(rfc, 'months')); // 22 months

// Find the difference between the current date and the rfc in weeks, months, and years.
console.log('\nDifference (rounded) between the current date and the rfc in weeks, months, and years');
console.log(mom.diff(rfc, 'weeks')); // 125 weeks (Current date: Aug 17, 2019)
console.log(mom.diff(rfc, 'months')); // 28 months
console.log(mom.diff(rfc, 'years')); // 2 years