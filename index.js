import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
const data_2014 = fifaData.filter((elem) => elem.Year === 2014);
const finals_2014 = data_2014.filter(x => x.Stage === 'Final')[0];

console.log('Home Team Finals 2014 Name: ', finals_2014['Home Team Name']);

//(b) Away Team name for 2014 world cup final
console.log('Away Team Finals 2014 Name: ', finals_2014['Away Team Name']);

//(c) Home Team goals for 2014 world cup final
console.log('Home Team Finals 2014 Goals: ', finals_2014['Home Team Goals']);

//(d) Away Team goals for 2014 world cup final
console.log('Away Team Finals 2014 Goals: ', finals_2014['Away Team Goals'])

//(e) Winner of 2014 world cup final */
const home_team_2014finals_goals = finals_2014['Home Team Goals'];
const away_team_2014finals_goals = finals_2014['Away Team Goals'];
let winner = null;
if (home_team_2014finals_goals >  away_team_2014finals_goals)
  winner = finals_2014['Home Team Name'];
else if (home_team_2014finals_goals <  away_team_2014finals_goals)
  winner = finals_2014['Away Team Name'];
else
  winner = 'Tie';
console.log('Winner of 2014 world cup final: ', winner);

  
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
  return data.filter((elem) => elem.Stage === 'Final');
}
console.log('Data for teams that made it to the final stage: ', getFinals(fifaData));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set */

function getYears(x, f) {
    const finals = f(x);
    const years = finals.map(z => z.Year);
    return years;
}
const years = getYears(fifaData, getFinals);
console.log('Years of finals: ', years);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(data, callback) {
    // Determine the winner (home or away) of each `finals` game.
    //
    // Input:   callback function `getFinals()`
    //
    // Output:  The name of all winning countries in an array called `winners`

    const finals = callback(data);
    const new_arr = [];
    finals.forEach((elem) => {

        const away_team_name = elem['Away Team Name'];
        const home_team_name = elem['Home Team Name'];

        const home_team_goals = elem['Home Team Goals'];
        const away_team_goals = elem['Away Team Goals'];

        if ( away_team_goals > home_team_goals)
            new_arr.push(away_team_name);
        else if (home_team_goals > away_team_goals)
            new_arr.push(home_team_name);
        // else
        //     new_arr.push('**TIE**');
    });
    return new_arr;
}
const task_4 = getWinners(fifaData, getFinals);
console.log('task 4', task_4);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(data, getFinals) {

    return getWinners(data, getFinals);

    // const new_arr = [];
    // for (let i = 0; i < winners.length; i++) {
    //     new_arr.push(winners[i]);
    // }
    // return new_arr;
}
const ddd = getWinnersByYear(fifaData, getFinals);
console.log(ddd);




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(data) {
    let sum_home_goals = 0;
    let sum_away_goals = 0;

    data.forEach((elem) => {
        sum_home_goals += elem['Home Team Goals'];
        sum_away_goals += elem['Away Team Goals'];
    });
    const N = data.length;
    const ave_home_goals = sum_home_goals / N;
    const ave_away_goals = sum_away_goals / N;

    return {ave_home_goals, ave_away_goals};
}
console.log(getAverageGoals(fifaData));




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */


function getGoals(data) {

    // Step 0: Get finals 
    const finals = data.filter(elem => elem.Stage.toLowerCase() === 'final');

    // Step 1: Compute average score for each team
    // -Grab name of home / away team
    const team_names = [];
    finals.forEach((elem) => {
        const home_team = elem['Home Team Name'];
        const away_team = elem['Away Team Name'];
        // console.log(home_team, away_team);

        team_names.push(home_team);
        team_names.push(away_team);
    });
    

    // -Extract only the unique names: (following distinct() function is from: https://codeburst.io/javascript-array-distinct-5edc93501dc4)
    // NOTE: all other code is completely my own from my mind without reference. Only the distinct function and its usage is not mine!
    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    };
    const distinct_names = team_names.filter(distinct);
    console.log('All teams in finals (same index as average and sum arrays below):');
    console.log(distinct_names);

    // -Create new array same size of distinct_names that stores the sum of all goals corresponding to same index as team in distinct_names array
    let distinct_names_sum_goals = [];
    for (let i = 0; i < distinct_names.length; i++)
        distinct_names_sum_goals.push(0);
    // console.log(distinct_names_sum_goals);

    // -Itterate over the finals dataset and for each element add up the goals for each team
    distinct_names.forEach((distinct_name, distinct_name_index) => {
        
        // --Search the dataset for goals corresponding to current team
        finals.forEach((finals_elem) => {
            if (finals_elem['Home Team Name'] === distinct_name)
                distinct_names_sum_goals[distinct_name_index] += finals_elem['Home Team Goals'];

            // ---Combine goals (don't discriminate if team is away or home - only care about team name):
            if (finals_elem['Away Team Name'] === distinct_name)
                distinct_names_sum_goals[distinct_name_index] += finals_elem['Away Team Goals'];
        });
    });
    console.log('Sum of goals for each team in finals (same index as team-names array):');
    console.log(distinct_names_sum_goals);


    
    // -Divide by number of wins for average
    let distinct_names_ave_goals = [];
    for (let i = 0; i < distinct_names.length; i++)
        distinct_names_ave_goals.push(distinct_names_sum_goals[i] / distinct_names_sum_goals.length);

    console.log('Average of goals for each team in finals (same index as team-names array):');
    console.log(distinct_names_ave_goals);


    // Step 2: Find max
    // -Find index corresponding to max, then grab the team name with this index
    let max = distinct_names_ave_goals[0];
    let max_index = 0;
    for( let i = 1; i < distinct_names_ave_goals.length; i++ ) {
        if (distinct_names_ave_goals[i] > max) {
            max = distinct_names_ave_goals[i];
            max_index = i;
        }
    }

    // -grab team name corresponding to the maximum average value found above:
    const name_of_team_with_max_ave_goals_in_finals = distinct_names[max_index];

    console.log('Team with max average goals in finals:');
    console.log(name_of_team_with_max_ave_goals_in_finals);
    return name_of_team_with_max_ave_goals_in_finals;
};



/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
