const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function validation(date) {
  try {
    return new Date(date.getTime());
  } catch {
    throw new Error('Invalid date!');
  }
}

 function getSeason(date) {

   
   if (!date) {
     return 'Unable to determine the time of year!';
    } else {
      
    validation(date);
    let month = date.getMonth();
      
    if (month === 0 || month === 1 || month === 11) {
      return 'winter';
    } else if (month === 2 || month === 3 || month === 4) {
      return 'spring';
    } else if (month === 5 || month === 6 || month === 7) {
      return 'summer';
    } else {
      return 'autumn';
    }
  }
 }

module.exports = {
  getSeason
};
