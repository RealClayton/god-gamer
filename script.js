const games = [
    { name: "Valorant", thumbnail: "Thumbnails/valorant.png" },
    { name: "WRC", thumbnail: "Thumbnails/WRC.png" },
    { name: "Elden Ring", thumbnail: "Thumbnails/elden ring.png" },
    { name: "Halo", thumbnail: "Thumbnails/halo.png" },
    { name: "Overwatch", thumbnail: "Thumbnails/overwatch.png" },
    { name: "Chess", thumbnail: "Thumbnails/chess.png" },
    { name: "Brawlhalla", thumbnail: "Thumbnails/brawlhalla.png" },
    { name: "COD MWIII", thumbnail: "Thumbnails/codmwiii.png" },
    { name: "Rocket League", thumbnail: "Thumbnails/rocket league.png" },
    { name: "Fortnite", thumbnail: "Thumbnails/fortnite.png" },

];

let currentIndex = 0;

function updateDisplay() {
    const prevIndex = (currentIndex - 1 + games.length) % games.length;
    const nextIndex = (currentIndex + 1) % games.length;

    document.getElementById('prev-game').textContent = `Game ${prevIndex + 1}/10: ${games[prevIndex].name}`;
    document.getElementById('current-game').textContent = `Game ${currentIndex + 1}/10: ${games[currentIndex].name}`;
    document.getElementById('next-game').textContent = `Game ${nextIndex + 1}/10: ${games[nextIndex].name}`;

    document.getElementById('prev-thumbnail').src = games[prevIndex].thumbnail;
    document.getElementById('current-thumbnail').src = games[currentIndex].thumbnail;
    document.getElementById('next-thumbnail').src = games[nextIndex].thumbnail;
}

function nextGame() {
    currentIndex = (currentIndex + 1) % games.length;
    updateDisplay();
}

function previousGame() {
    currentIndex = (currentIndex - 1 + games.length) % games.length;
    updateDisplay();
}

function resetGame() {
    currentIndex = 0;
    updateDisplay();
}

// Initial display
updateDisplay();

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextGame();
    } else if (event.key === 'ArrowLeft') {
        previousGame();
    } else if (event.key === 'r') {
        resetGame();
    }
});
