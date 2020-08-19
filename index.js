import { fifaData } from './fifa.js';


// ⚽️ M  V P ⚽️ //

/* Task 1 */
console.log('Task-1');
import { get_finals_2014, tasks_1 } from './task-1.js';
get_finals_2014(fifaData);
console.log(`Home Team name for 2014 world cup final: ${tasks_1[0]()}`); // a
console.log(`Away Team name for 2014 world cup final: ${tasks_1[1]()}`); // b
console.log(`Home Team goals for 2014 world cup final: ${tasks_1[2]()}`); // c
console.log(`Away Team goals for 2014 world cup final: ${tasks_1[3]()}`); // d
console.log(`Winner of 2014 world cup final: ${tasks_1[4]()}`); // e
console.log('--------------------------------------');

/* Task 2 */
console.log('Task-2');
import { getFinals, getFinals2 } from './task-2.js';
const finals = getFinals(fifaData);
console.log(finals);
console.log(getFinals2(fifaData));
console.log('--------------------------------------');

/* Task 3 */
console.log('Task-3');
import { getYears, getYears2 } from './task-3.js';
console.log(getYears(getFinals, fifaData));
console.log(getYears2(getFinals2, fifaData));
console.log('--------------------------------------');

/* Task 4 */ 
console.log('Task-4');
import { getWinners, getWinners2 } from './task-4.js';
console.log(getWinners(getFinals, fifaData));
console.log('--------------------------------------');

/* Task 5 */
console.log('Task-5');
import { getWinnersByYear } from './task-5.js';
const winners_by_year = getWinnersByYear(getWinners, getYears, getFinals,fifaData);
console.log(winners_by_year);
console.log('--------------------------------------');

/* Task 6 */
console.log('Task-6');
import { getAverageGoals, getAverageGoals2 } from './task-6.js';
const {ave_home_goals, ave_away_goals} = getAverageGoals(fifaData);
console.log(`ave-home-goals-per-game: ${ave_home_goals}`);
console.log(`ave-away-goals-per-game: ${ave_away_goals}`);
console.log('--------------------------------------');

console.log('Task-6 with .reduce():');
const [ave_home_goals2, ave_away_goals2] = getAverageGoals2(fifaData);
console.log(`ave-home-goals-per-game: ${ave_home_goals2}`);
console.log(`ave-away-goals-per-game: ${ave_away_goals2}`);
console.log('--------------------------------------');

// Stretch 1:
console.log('\n');
console.log('Stretch:');
import {getCountryWins as stretch_1, getGoals} from './task-X--stretch.js';
getGoals(fifaData);
console.log('--------------------------------------');