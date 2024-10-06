const holidays = [
    { name: "New Year's Day", date: "January 1", message: "Happy New Year!" },
    { name: "Martin Luther King Jr. Day", date: "January 21", message: "Celebrate the legacy of Martin Luther King Jr." },
    { name: "Groundhog Day", date: "February 2", message: "Will the groundhog see its shadow?" },
    { name: "Valentine's Day", date: "February 14", message: "Happy Valentine's Day!" },
    { name: "President's Day", date: "February 18", message: "Honoring past presidents of the United States." },
    { name: "Washington's Birthday", date: "February 21", message: "The day we got a 6 foot dude to lead our army aginst the tea trinkers." },
    { name: "St. Patrick's Day", date: "March 17", message: "Pinch somebody!" },
    { name: "First Day of Spring", date: "March 20", message: "Time for green things." },
    { name: "Easter Sunday", date: "March 31", message: "Celebrate the resurrection of Jesus Christ." },
    { name: "April Fool's Day", date: "April 1", message: "Prank somebody for me!" },
    { name: "US Army Day", date: "April 6", message: "Where Dose a General Keep his armys? in his Sleevies!!" },
    { name: "Arbor Day", date: "April 26", message: "Hug a tree." },
    { name: "Mother's Day", date: "May 12", message: "Honor mothers and motherhood." },
    { name: "Memorial Day", date: "May 27", message: "Remember and honor those who died in military service." },
    { name: "Flag Day", date: "June 14", message: "Celebrate the adoption of the United States flag." },
    { name: "First Day of Summer", date: "June 21", message: "There's 104 days of summer vacation!!!!!!" },
    { name: "Independence Day", date: "July 4", message: "Blow up the sky and tease Britain." },
    // The version linking to the fireworks
    // { name: "Independence Day", date: "July 4", message: "Blow up the sky and tease Britain. Click here for fireworks: <a href=/Projects/Fireworks/>here</a>" },
    { name: "US Coast Gaurd Day", date: "August 4th", message: "The Only Holiday I have in August, and the only Academy that dosen't need a Congressional Nomination" },
    { name: "Labor Day", date: "September 2", message: "Put some Good 'ole Elbow Grease into it." },
    { name: "9/11 Terrorist Attacks", date: "September 11", message: "Nothing funny about this one. Remember and Honor those who gave their lives for others." },
    { name: "US Air Force Day", date: "September 18", message: "They fly. Well most of them don't But some do!" },
    { name: "First Day of Fall", date: "September 22", message: "Check what's in the leaves before you jump in." },
    { name: "Columbus Day", date: "October 13", message: "Remember Christopher Columbus' voyage to the Americas." },
    { name: "US Navy Day", date: "October 27", message: "We Got boats. Big boats." },
    { name: "Halloween", date: "October 31", message: "Trick or treat! Enjoy costumes and candies." },
    { name: "US Marine Day", date: "November 10", message: "Idk they're the marines. Watcha gunna do?" },
    { name: "Veterans Day", date: "November 11", message: "Thank veterans for their service to the country." },
    { name: "Thanksgiving Day", date: "November 27", message: "Give thanks and enjoy a feast with loved ones." },
    { name: "First Day of Winter", date: "December 21", message: "No Yellow Snow." },
    { name: "Christmas Day", date: "December 25", message: "Merry Christmas! Celebrate Christ's birth." },
    { name: "New Year's Eve", date: "December 31", message: "Only stay up if you don't need rest." },
];

function daysUntilHoliday(holidayDate) {
    const today = new Date();
    const holidayThisYear = new Date(today.getFullYear(), getMonthIndex(holidayDate), getDay(holidayDate));
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
        const holidayDate = new Date(today.getFullYear(), getMonthIndex(holiday.date), getDay(holiday.date));
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
            <h1 Class="HolidayText">Holiday Info:</h1>
            <p class="Slogan">We keep track so you don't have to!</p>
            <p class="HolidayText">The nearest holiday is <span class="HolidayName">${holiday.name}</span>.</p>
            <p class="HolidayText"><span class="DaysUntil">${daysUntil}</span> days until ${holiday.name} (${holiday.date}).</p>
            <p class="HolidayMessage">${holiday.message}</p>
        `;
        document.dispatchEvent(new CustomEvent('HolidayLoaded'));
    } else {
        holidayInfo.innerHTML = `<p>No upcoming holidays found.</p>`;
    }
}

function getMonthIndex(dateString) {
    const months = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];
    return months.indexOf(dateString.split(" ")[0]);
}

function getDay(dateString) {
    return parseInt(dateString.split(" ")[1], 10);
}

// Call displayNearestHoliday() when the page finishes loading
document.addEventListener('DOMContentLoaded', displayNearestHoliday);

