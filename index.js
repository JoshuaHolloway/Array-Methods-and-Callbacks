import { fifaData } from './fifa.js';


// ⚽️ M  V P ⚽️ //

/* Task 2 */
console.log('Task-2');
import { getFinals, getFinals2 } from './task-2.js';
console.log(getFinals(fifaData));
console.log(getFinals2(fifaData));


/* Task 3 */
console.log('Task-3');
import { getYears, getYears2 } from './task-3.js';
console.log(getYears(getFinals, fifaData));
console.log(getYears2(getFinals2, fifaData));

// redo with .map() method:


/* Task 4 */ 
console.log('Task-4');
import { getWinners, getWinners2 } from './task-4.js';
console.log(getWinners(getFinals, fifaData));

/* Task 5 */
console.log('Task-5');
import { getWinnersByYear } from './task-5.js';
const winners_by_year = getWinnersByYear(getWinners, getYears, getFinals,fifaData);
console.log(winners_by_year);

/* Task 6 */
console.log('Task-6');
import { getAverageGoals } from './task-6.js';
const {ave_home_goals, ave_away_goals} = getAverageGoals(fifaData);
console.log(`ave-home-goals-per-game: ${ave_home_goals}`);
console.log(`ave-away-goals-per-game: ${ave_away_goals}`);
