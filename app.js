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
let futureDate = new Date(2020, 4, 24, 11, 30, 0);

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

// Future time in miliseconds
const futureTime = futureDate.getTime();
console.log(futureTime);