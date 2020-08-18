/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback, data) {
    // Determine the winner (home or away) of each `finals` game.
    //
    // Input:   callback function `getFinals()`
    //
    // Output:  The name of all winning countries in an array called `winners`

    const finals = callback(data);
    const new_arr = [];
    finals.forEach((elem) => {

        const away_team_name = elem['Away Team Name'].toLowerCase();
        const home_team_name = elem['Home Team Name'].toLowerCase();

        const home_team_goals = elem['Home Team Goals'];
        const away_team_goals = elem['Away Team Goals'];

        if ( away_team_goals > home_team_goals)
            new_arr.push(away_team_name);
        else if (home_team_goals > away_team_goals)
            new_arr.push(home_team_name);
        else
            new_arr.push('**TIE**');
    });
    return new_arr;
};


// repeat with advanced array method
const getWinners2 = () => {};


export { getWinners, getWinners2 };