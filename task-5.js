/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
*/

function getWinnersByYear(getWinners, getYears, getFinals, data) {

    const winners = getWinners(getFinals, data);
    const years = getYears(getFinals, data);

    const new_arr = [];
    for (let i = 0; i < winners.length; i++) {
        new_arr.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
    }
    return new_arr;
};

export { getWinnersByYear };