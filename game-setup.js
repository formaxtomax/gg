let gameId = null;
let players = [];

// Event listeners for the create and join game buttons
document.getElementById('create-game').addEventListener('click', showGameSetup);
document.getElementById('join-game').addEventListener('click', showGameSetup);

function showGameSetup() {
    document.getElementById('create-or-join').classList.add('hidden');
    document.getElementById('game-setup').classList.remove('hidden');
}

// Create a new game
document.getElementById('start-new-game').addEventListener('click', function() {
    const gameName = document.getElementById('game-name').value;
    if (gameName) {
        gameId = gameName; // Simulate a unique game ID
        alert('تم إنشاء اللعبة بنجاح: ' + gameId);
        players.push(gameId); // Add the player to the game
        document.getElementById('game-setup').classList.add('hidden');
        document.getElementById('game-section').classList.remove('hidden');
        showPuzzle();
    } else {
        alert('يرجى إدخال اسم للعبة');
    }
});

// Join an existing game
document.getElementById('join-existing-game').addEventListener('click', function() {
    const gameName = document.getElementById('join-game-id').value;
    if (gameName && players.includes(gameName)) {
        alert('تم الانضمام إلى اللعبة: ' + gameName);
        gameId = gameName; // Join the selected game
        document.getElementById('game-setup').classList.add('hidden');
        document.getElementById('game-section').classList.remove('hidden');
        showPuzzle();
    } else {
        alert('لم يتم العثور على اللعبة أو اسم اللعبة غير صحيح');
    }
});
