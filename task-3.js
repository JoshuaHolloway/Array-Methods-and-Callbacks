/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {
    // Input:   Callback function `getFinals`
    // Output:  An array called `years` containing all of the years in the dataset
    const finals_data = callback(data);
    const new_arr = [];
    finals_data.forEach((elem) => {
        new_arr.push(elem.Year);
    });
    return new_arr;
};



// redo with .map() method:
const getYears2 = (callback, data) => callback(data).map((elem) => elem.Year);



export {getYears, getYears2};