const storeOpening = new Date('december 4, 2023 15:51:00');

setCountdown(storeOpening);

setInterval(function() {
    setCountdown(storeOpening);
},1000);

function setCountdown(countingDownTime) {

    let now = new Date();

    let timeRemaining = countingDownTime - now;

    console.log(timeRemaining);

    let seconds = Math.floor(timeRemaining / 1000);
    
    let minutes = Math.floor(timeRemaining / (1000*60));
    
    let hours = Math.floor(timeRemaining / (1000*60*60));

    let days = Math.floor(timeRemaining / (1000*60*60*24));

    console.log(days, hours, minutes, seconds);

    let daysToDisplay = days;

    let hoursToDisplay = hours - (days * 24);

    let minutesToDisplay = minutes - ( hours * 60 );

    let secondsToDisplay = seconds - ( minutes * 60 );

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    daysEl.textContent = daysToDisplay;
    hoursEl.textContent = hoursToDisplay;
    minutesEl.textContent = minutesToDisplay;
    secondsEl.textContent = secondsToDisplay;

}