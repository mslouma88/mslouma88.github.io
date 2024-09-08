// Date actuelle
const now = new Date();

// Date dans un mois
const oneMonthLater = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());

function updateCountdown() {
    const difference = oneMonthLater - new Date();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Actualisation du compte à rebours chaque seconde
setInterval(updateCountdown, 1000);

// Actualisation du compte à rebours au chargement de la page
updateCountdown();
