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
function getSeason(date ) {
  const seasons = {
    winter: [0, 1, 11],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  };

  let answer = ''

      try {
        date = date.getMonth()

        if (typeof date == 'string') {
          throw new Error("Invalid date!")
        }

        let search = Object.entries(seasons)
          .filter(([key, value]) => {
            value.filter(e => {
              if (date === e) {
                answer = key
              }
            })
          })

        return answer  
      } catch (e) {
        if (e.name == 'TypeError') {
          return 'Unable to determine the time of year!'
        } 

        // разобраться с 3 throw
      }
}

module.exports = {
  getSeason
}
