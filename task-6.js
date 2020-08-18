/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

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
};

// repeat with .reduce()
const getAverageGoals2 = () => {};

export { getAverageGoals, getAverageGoals2 };