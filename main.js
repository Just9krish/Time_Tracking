let dailyCurrent = [];
let dailyPrevious = [];
let weeklyCurrent = [];
let weeklyPrevious = [];
let monthlyCurrent = [];
let monthlyPrevious = [];


// Getting data from json
fetch("./data.json")
.then(response => response.json())
.then(jsonData => {
    jsonData.forEach((e) => {
        dailyCurrent.push(e.timeframes.daily.current)
        dailyPrevious.push(e.timeframes.daily.previous)
        weeklyCurrent.push(e.timeframes.weekly.current)
        weeklyPrevious.push(e.timeframes.weekly.previous)
        monthlyCurrent.push(e.timeframes.monthly.current)
        monthlyPrevious.push(e.timeframes.monthly.previous)
    })
})

.then(() => {
    const current = document.getElementsByClassName("hours")
    const previous = document.getElementsByClassName("previous-hours")
    
    for (let i = 0; i < 6; i++) {
        current[i].innerHTML = `${dailyCurrent[i]} hrs`;
        previous[i].innerHTML = `Yesterday - ${dailyPrevious[i]} hrs`;
    }
})

// console.log(dailyCurrent)
// console.log(dailyPrevious)
// console.log(weeklyCurrent)
// console.log(weeklyPrevious)
// console.log(monthlyCurrent)
// console.log(monthlyPrevious)
