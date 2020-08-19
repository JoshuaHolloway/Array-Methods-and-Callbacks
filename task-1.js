/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */
const tasks_1 = [];


let finals_2014 = [];
const get_finals_2014 = (data) => {
    finals_2014 = data.filter(elem => {
        return ((elem.Stage.toLowerCase() === 'final') 
            && (elem.Year === 2014));
    })[0];
};

// (a) Home Team name for 2014 world cup final
tasks_1.push(() => finals_2014['Home Team Name']);

// (b) Away Team name for 2014 world cup final
tasks_1.push(() => finals_2014['Away Team Name']);

// (c) Home Team goals for 2014 world cup final
tasks_1.push(() => finals_2014['Home Team Goals']);

// (d) Away Team goals for 2014 world cup final
tasks_1.push(() => finals_2014['Away Team Goals']);

// (e) Winner of 2014 world cup final 
tasks_1.push(() => {
    const home_team_goals = finals_2014['Home Team Goals']
    const away_team_goals = finals_2014['Away Team Goals'];

    if (home_team_goals > away_team_goals)
        return finals_2014['Home Team Name'];
    else if (home_team_goals < away_team_goals)
        return finals_2014['Away Team Name'];
    else
        return '**TIE**';
});

export {get_finals_2014, tasks_1};