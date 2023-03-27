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


function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  const seasons = {
    winter: [0, 1, 11],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };

  let answer;

  if (date.propertyIsEnumerable("toString")) {
    throw new Error("Invalid date!");
  }

  if (
    (date &&
      Object.prototype.toString.call(date) === "[object Date]" &&
      !isNaN(date)) === false
  ) {
    throw new Error("Invalid date!");
  }

  try {
    date = date.getMonth();

    Object.entries(seasons).filter(([key, value]) => {
      value.filter((e) => {
        if (date === e) {
          answer = key;
        }
      });
    });

    return answer;
  } catch (e) {
    if (e.name == "TypeError") {
      return "Unable to determine the time of year!";
    }
  }
}

module.exports = {
  getSeason
}
