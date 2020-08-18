function getFinals(data) {
    // Input: `data`
    // Output: An array of objects with only finals data

    // Loop through array of objects and if key stage is set to Final then make copy of element
    const new_arr = [];
    data.forEach((elem) => {
        if (elem.Stage.toLowerCase() === 'final')
            new_arr.push(elem);
    });
    return new_arr;
};



// redo with .filter method:
const getFinals2 = (dta) => dta.filter(x => x.Stage.toLowerCase() === 'final');



export { getFinals, getFinals2 };