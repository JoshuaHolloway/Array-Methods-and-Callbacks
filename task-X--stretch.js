
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, team_initials) {

};


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

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


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

export {getCountryWins, getGoals, badDefense};