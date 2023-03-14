const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// Assigning the date
let futureDate = new Date(2023, 4, 24, 11, 30, 0);

// Year
const year = futureDate.getFullYear();

// Month
let month = futureDate.getMonth();
month = months[month];

// Day Number
let dayNumber = futureDate.getDate();

// Week Day
let weekDay = weekdays[futureDate.getDay()];

// Hours
const hours = futureDate.getHours();

// Minutes
const minutes = futureDate.getMinutes();

// Displaying the dynamic date
giveaway.textContent = `giveaway ends on ${weekDay}, ${dayNumber} ${month} ${year} ${hours}:${minutes}`;

// Future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {

    const today = new Date().getTime();

    const difference = futureDate - today;

    // 1 s = 1000 ms
    // 1 m = 60 s
    // 1 hr = 60 min
    // 1 d = 24 hr

    // number of milliseconds in one day
    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    console.log(millisecondsInOneDay);

}

getRemainingTime();