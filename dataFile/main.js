let dailyCurrent = [];
let dailyPrevious = [];
let weeklyCurrent = [];
let weeklyPrevious = [];
let monthlyCurrent = [];
let monthlyPrevious = [];

// Getting data from json
fetch("./dataFile/data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.forEach((e) => {
      dailyCurrent.push(e.timeframes.daily.current);
      dailyPrevious.push(e.timeframes.daily.previous);
      weeklyCurrent.push(e.timeframes.weekly.current);
      weeklyPrevious.push(e.timeframes.weekly.previous);
      monthlyCurrent.push(e.timeframes.monthly.current);
      monthlyPrevious.push(e.timeframes.monthly.previous);
    });
  })

  .then(() => {
    const current = document.getElementsByClassName("hours");
    const previous = document.getElementsByClassName("previous-hours");

    for (let i = 0; i < 6; i++) {
      current[i].innerHTML = `${dailyCurrent[i]}hrs`;
      previous[i].innerHTML = `Yesterday - ${dailyPrevious[i]}hrs`;
    }
  });

changeDuration();

function changeDuration(duration) {
  let target = document.getElementsByName("duration");

  target.forEach((target) => {
    target.addEventListener("click", () => {
      if (target.checked) {
        let duration = target.value;

        const hours = document.getElementsByClassName("hours");
        const previousHours = document.getElementsByClassName("previous-hours");
        let current;
        let previous;
        let range;

        switch (duration) {
          case "daily":
            current = dailyCurrent;
            previous = dailyPrevious;
            range = "Yesterday";
            break;
          case "weekly":
            current = weeklyCurrent;
            range = "Last Week";
            previous = weeklyPrevious;
            break;
          case "monthly":
            current = monthlyCurrent;
            range = "Last Month";
            previous = monthlyPrevious;
            break;
        }

        for (let i = 0; i < 6; i++) {
          hours[i].innerHTML = `${current[i]}hrs`;
          previousHours[i].innerHTML = `${range} - ${previous[i]}hrs`;
        }
      }
    });
  });
}
