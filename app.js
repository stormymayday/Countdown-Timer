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
let futureDate = new Date(2023, 4, 24, 15, 30, 0);

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

    // 1 sec = 1000 ms
    // 1 min = 60 sec
    // 1 hr = 60 min
    // 1 day = 24 hr

    // Number of milliseconds in one day
    const msInOneDay = 24 * 60 * 60 * 1000;

    // Number of milliseconds in one hour
    const msInOneHour = 60 * 60 * 1000;

    // Number of milliseconds in one minute
    const msInOneMinute = 60 * 1000;

    // Calculating the number of days remaining
    let daysRemaining = Math.floor(difference / msInOneDay);

    // Calculating the number of hours remaining
    let hoursRemaining = Math.floor((difference % msInOneDay) / msInOneHour);

    // Calculating the number of minutes remaining
    let minutesRemaining = Math.floor((difference % msInOneHour) / msInOneMinute);

    // Calculating the number of seconds remaining
    let secondsRemaining = Math.floor((difference % msInOneMinute) / 1000);

    // Values array
    const values = [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining];

    // Format function that adds leading 0 if item is less that 10
    function format(item) {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item;
    }

    // Iterating through the items nodeList and assigning values array items
    items.forEach(function (item, index) {

        item.innerHTML = format(values[index]);

    });

    // Edge Case: When curren time (today) is greater that futureDate
    if (difference < 0) {

        clearInterval(countdown);

        deadline.innerHTML = `<h4 class='expired'>Sorry, this giveaway has expired</h4>`;

    }

}

// Calling the 'getRemainingTime' every second
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();