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
// Extracting the year
const year = futureDate.getFullYear();
// Extracting hours
const hours = futureDate.getHours();
// Extracting minutes
const minutes = futureDate.getMinutes();
console.log(minutes);
// Displaying the dynamic date
giveaway.textContent = `giveaway ends on ${year} ${hours}`;