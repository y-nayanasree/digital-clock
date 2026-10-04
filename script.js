// Updates the digital clock
function updateClock() {

    // Gets the current date and time
    const now = new Date();

    // Gets the current hour, minute and second
    let hour24 =now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Converts 24-hour time into 12-hour time
    let period = hour24 >= 12 ? "PM" : "AM";

    let hours = hour24 % 12;

    // In 12-hour format, 0 becomes 12
    if (hours === 0) {
        hours = 12;
    }

    // Adds leading zero
    // Example: 5 becomes 05
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");


    // Displays the current time with AM/PM
    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds} ${period}`;


    // Caption below the clock
    document.getElementById("caption").textContent =
        "Make every moment count ✨";


    // Selects the background according to the time
    if (hour24 >= 6 && hour24 < 18) {

        // 6:00 AM to 5:59 PM
        // Morning/day floral background
        document.body.style.backgroundImage =
            "url('morning-floral.png')";

    } else {

        // 6:00 PM to 5:59 AM
        // Night floral background
        document.body.style.backgroundImage =
            "url('night-floral.png')";
    }
}


// Run the clock immediately
updateClock();


// Update the time every second
setInterval(updateClock, 1000);
