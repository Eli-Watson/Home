const holidays = [
    { name: "New Year's Day", date: "January 1", message: "Happy New Year!" },
    { name: "Martin Luther King Jr. Day", date: "January 21", message: "Celebrate the legacy of Martin Luther King Jr." },
    { name: "Groundhog Day", date: "February 2", message: "Will the groundhog see its shadow?" },
    { name: "Valentine's Day", date: "February 14", message: "Happy Valentine's Day!" },
    { name: "President's Day", date: "February 18", message: "Honoring past presidents of the United States." },
    { name: "St. Patrick's Day", date: "March 17", message: "Pinch somebody!" },
    { name: "First Day of Spring", date: "March 20", message: "Time for green things." },
    { name: "Easter Sunday", date: "March 31", message: "Celebrate the resurrection of Jesus Christ." },
    { name: "April Fool's Day", date: "April 1", message: "Prank somebody for me!" },
    { name: "Arbor Day", date: "April 26", message: "Hug a tree." },
    { name: "Mother's Day", date: "May 12", message: "Honor mothers and motherhood." },
    { name: "Memorial Day", date: "May 27", message: "Remember and honor those who died in military service." },
    { name: "Flag Day", date: "June 14", message: "Celebrate the adoption of the United States flag." },
    { name: "First Day of Summer", date: "June 21", message: "There's 104 days of summer vacation!!!!!!" },
    { name: "Independence Day", date: "July 4", message: "Blow up the sky and tease Britain." },
    { name: "Labor Day", date: "September 2", message: "Honoring the contributions of American workers." },
    { name: "First Day of Autumn", date: "September 22", message: "Check what's in the leaves before you jump in." },
    { name: "Columbus Day", date: "October 13", message: "Remember Christopher Columbus' voyage to the Americas." },
    { name: "Halloween", date: "October 31", message: "Trick or treat! Enjoy costumes and candies." },
    { name: "Veterans Day", date: "November 11", message: "Thank veterans for their service to the country." },
    { name: "Thanksgiving Day", date: "November 27", message: "Give thanks and enjoy a feast with loved ones." },
    { name: "First Day of Winter", date: "December 21", message: "No Yellow Snow." },
    { name: "Christmas Day", date: "December 25", message: "Merry Christmas! Celebrate Christ's birth." },
    { name: "New Year's Eve", date: "December 31", message: "Only stay up if you don't need rest." },
];

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

function displayNearestHoliday() {
    const { holiday, daysUntil } = findNearestHoliday();
    const holidayInfo = document.getElementById('holidayInfo');

    if (holiday) {
        holidayInfo.innerHTML = `
            <h3>Holiday Info:</h3>
            <p class="Slogan">We keep track so you don't have to!</p>
            <p>The nearest holiday is <span class="HolidayName">${holiday.name}</span>.</p>
            <p><span class="DaysUntil">${daysUntil}</span> days until ${holiday.name} (${holiday.date}).</p>
            <p class="HolidayMessage">${holiday.message}</p>
        `;
    } else {
        holidayInfo.innerHTML = `<p>No upcoming holidays found.</p>`;
    }
}

window.onload = displayNearestHoliday;