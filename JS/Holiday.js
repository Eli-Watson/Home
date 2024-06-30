const holidays = [
    { name: "New Year's Day", date: "January 1", message: "Happy New Year!" },
    { name: "Martin Luther King Jr. Day", date: "January 21", message: "Celebrate the legacy of Martin Luther King Jr." },
    { name: "Groundhog Day", date: "February 2", message: "Will the groundhog see its shadow?" },
    { name: "Valentine's Day", date: "February 14", message: "Happy Balintines Day" },
    { name: "President's Day", date: "February 18", message: "How Many are we up to now?" },
    { name: "St. Patrick's Day", date: "March 17", message: "Pinch Sombody" },
    { name: "First Day of Spring", date: "March 20", message: "Time for green things." },
    { name: "Easter Sunday", date: "March 31", message: "Celebrate the resurrection of Jesus Christ." },
    { name: "April Fool's Day", date: "April 1", message: "Prank Sombody for me" },
    { name: "Arbor Day", date: "April 26", message: "Hug a Tree" },
    { name: "Mother's Day", date: "May 12", message: "Honor mothers and motherhood." },
    { name: "Memorial Day", date: "May 27", message: "Celebrate those who gave it all and cherish the ones who you may do so in person" },
    { name: "Flag Day", date: "June 14", message: "On this day we got a flag" },
    { name: "First Day of Summer", date: "June 21", message: "There's 104 days of summer vacation!!!!!!" },
    { name: "Independence Day", date: "July 4", message: "Blow up the sky and tease Britian" },
    { name: "Labor Day", date: "September 2", message: "Labor" },
    { name: "First Day of Autumn", date: "September 22", message: "Check whats in the leafs before you jump in" },
    { name: "Columbus Day", date: "October 13", message: "Remember Christopher Columbus' voyage to the Americas." },
    { name: "Halloween", date: "October 31", message: "We've all head trick or treat smell my feet, but I can already. Take a shower." },
    { name: "Veterans Day", date: "November 11", message: "Thank veterans for their service to the country." },
    { name: "Thanksgiving Day", date: "November 27", message: "Give thanks and enjoy a feast with loved ones." },
    { name: "First Day of Winter", date: "December 21", message: "No Yellow Snow" },
    { name: "Christmas Day", date: "December 25", message: "Merry Christmas! Celebrate Christs Birth" },
    { name: "New Year's Eve", date: "December 31", message: "Only stay up if you don't need rest" },
];

// Function to calculate days until a holiday
function daysUntilHoliday(holidayDate) {
    const today = new Date();
    const holidayThisYear = new Date(today.getFullYear() + '/' + holidayDate);
    if (today > holidayThisYear) {
        holidayThisYear.setFullYear(today.getFullYear() + 1);
    }
    const diffTime = Math.abs(holidayThisYear - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Function to find the nearest holiday
function findNearestHoliday() {
    const today = new Date();
    let nearestHoliday = null;
    let minDays = Infinity;

    holidays.forEach(holiday => {
        const holidayDate = new Date(today.getFullYear() + '/' + holiday.date);
        const daysToHoliday = Math.ceil((holidayDate - today) / (1000 * 60 * 60 * 24));

        if (daysToHoliday >= 0 && daysToHoliday < minDays) {
            minDays = daysToHoliday;
            nearestHoliday = holiday;
        }
    });

    return { holiday: nearestHoliday, daysUntil: minDays };
}

// Display the nearest holiday information
function displayNearestHoliday() {
    const { holiday, daysUntil } = findNearestHoliday();
    const holidayInfo = document.getElementById('holidayInfo');

    if (holiday) {
        holidayInfo.innerHTML = `
            <p>The nearest holiday is ${holiday.name}.</p>
            <p>${daysUntil} days until ${holiday.name} (${holiday.date}).</p>
            <p>${holiday.message}</p>
        `;
    } else {
        holidayInfo.innerHTML = `<p>No upcoming holidays found.</p>`;
    }
}

// Call displayNearestHoliday() when the page loads
window.onload = displayNearestHoliday;