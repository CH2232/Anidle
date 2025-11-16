document.addEventListener('DOMContentLoaded', () => {

    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const resultsGrid = document.getElementById('results-grid');
    const suggestionsBox = document.getElementById('suggestions-box');

    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const howToPlayBtn = document.getElementById('how-to-play-btn');
    const feedbackBtn = document.getElementById('feedback-btn');
    const giveUpModal = document.getElementById('give-up-modal');
    const hintBtn = document.getElementById('hint-btn');
    const giveUpBtn = document.getElementById('give-up-btn');

    const winModal = document.getElementById('win-modal'); 
    const howToPlayModal = document.getElementById('how-to-play-modal');
    const feedbackModal = document.getElementById('feedback-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal-btn');

    const timeStat = document.getElementById('time-stat');
    const guessesStat = document.getElementById('guesses-stat');
    const resetButton = document.getElementById('reset-button');
    const correctAnswerText = document.getElementById('correct-answer-text');
    const guessesStatLost = document.getElementById('guesses-stat-lost');

    const bgMusic = document.getElementById('bg-music');
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');

    const hintModal = document.getElementById('hint-modal');
    const hintText = document.getElementById('hint-text');
    const confirmGiveUpModal = document.getElementById('confirm-give-up-modal');
    const confirmGiveUpBtn = document.getElementById('confirm-give-up-btn');
    const closeLostModalBtn = document.getElementById('close-lost-modal-btn');

    let guessCount = 0;
    let startTime;
    let secretCharacter;
    let hintsUsed = 0;
    let availableHints = [];

    function startGame() {
        const randomIndex = Math.floor(Math.random() * characters.length);
        secretCharacter = characters[randomIndex];
        
        guessCount = 0;
        startTime = new Date();
        if(bgMusic) bgMusic.volume = 0.5; 
        hintsUsed = 0;
        availableHints = ['hairColor', 'firstAppearanceYear', 'anime'];
        document.getElementById('hint-count').textContent = `(${availableHints.length})`;
        hintBtn.disabled = false;
        giveUpBtn.disabled = false;
    }

    function createCell(text, isCorrect) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = text;
        if (isCorrect) cell.classList.add('correct');
        return cell;
    }

    function handleGuess() {
        const guessName = guessInput.value.trim();
        const guessedCharacter = characters.find(
            char => char.name.toLowerCase() === guessName.toLowerCase()
        );

        if (!guessedCharacter) {
            alert("Character not found! Please select from the list.");
            return;
        }
        
        suggestionsBox.style.display = 'none';
        guessCount++; 
        const resultRow = document.createElement('div');
        resultRow.className = 'result-row';
        
        const nameCell = createCell(guessedCharacter.name, guessedCharacter.name.toLowerCase() === secretCharacter.name.toLowerCase());
        const animeCell = createCell(guessedCharacter.anime, guessedCharacter.anime === secretCharacter.anime);
        const genderCell = createCell(guessedCharacter.gender, guessedCharacter.gender === secretCharacter.gender);
        const hairCell = createCell(guessedCharacter.hairColor, guessedCharacter.hairColor === secretCharacter.hairColor);

        const yearCell = document.createElement('div');
        yearCell.className = 'cell';
        let yearText = guessedCharacter.firstAppearanceYear;

        if (guessedCharacter.firstAppearanceYear === secretCharacter.firstAppearanceYear) {
            yearCell.classList.add('correct');
        } else {
            yearCell.classList.add('partial');
            yearText += (guessedCharacter.firstAppearanceYear < secretCharacter.firstAppearanceYear) ? ' (↑)' : ' (↓)';
        }
        yearCell.textContent = yearText;
        
        resultRow.append(nameCell, animeCell, genderCell, hairCell, yearCell);
        resultsGrid.prepend(resultRow);
        guessInput.value = '';

        if (guessedCharacter.name.toLowerCase() === secretCharacter.name.toLowerCase()) {
            console.log("Win condition met! The modal should appear now.");
            const endTime = new Date();
            const timeTaken = Math.round((endTime - startTime) / 1000);
            
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            timeStat.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            guessesStat.textContent = guessCount;

            winModal.classList.remove('hidden'); 

            guessInput.disabled = true;
            guessButton.disabled = true;
            hintBtn.disabled = true;    
            giveUpBtn.disabled = true;  
        }
    }

    function resetGame() {
        winModal.classList.add('hidden'); 
        giveUpModal.classList.add('hidden');
        resultsGrid.innerHTML = '';
        guessInput.disabled = false;
        guessButton.disabled = false;
        guessInput.value = '';
        giveUpBtn.disabled = false;
        startGame();
    }

    guessInput.addEventListener('input', () => {
        const query = guessInput.value.toLowerCase();
        suggestionsBox.innerHTML = '';
        if (query.length === 0) {
            suggestionsBox.style.display = 'none';
            return;
        }
        const filteredChars = characters.filter(char => char.name.toLowerCase().includes(query));
        if (filteredChars.length > 0) {
            filteredChars.forEach(char => {
                const item = document.createElement('div');
                item.className = 'suggestion-item';
                item.textContent = char.name;
                item.addEventListener('click', () => {
                    guessInput.value = char.name;
                    suggestionsBox.style.display = 'none';
                });
                suggestionsBox.appendChild(item);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    });

    menuToggleBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });
    window.addEventListener('click', () => {
        if (!dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });
    howToPlayBtn.addEventListener('click', (event) => {
        event.preventDefault();
        howToPlayModal.classList.remove('hidden');
        dropdownMenu.classList.add('hidden');
    });
    feedbackBtn.addEventListener('click', (event) => {
    event.preventDefault();
    feedbackModal.classList.remove('hidden');
    dropdownMenu.classList.add('hidden');

    const stars = document.querySelectorAll('#feedback-modal .star');
    const ratingValueInput = document.getElementById('rating-value');
    const reviewForm = document.getElementById('review-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            ratingValueInput.value = value;

            star.parentElement.setAttribute('data-rating', value);
        });
    });
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(reviewForm);
        fetch(reviewForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                reviewForm.style.display = 'none';
                thankYouMessage.classList.remove('hidden');
            } else {
                alert('Oops! There was a problem submitting your review.');
            }
        }).catch(error => {
            alert('Oops! There was an error.');
        });
    });
});

    hintBtn.addEventListener('click', (event) => {
        event.preventDefault();
        giveHint();
        dropdownMenu.classList.add('hidden'); 
    });

    giveUpBtn.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.classList.add('hidden'); 
        confirmGiveUpModal.classList.remove('hidden'); 
    });

    confirmGiveUpBtn.addEventListener('click', () => {
        confirmGiveUpModal.classList.add('hidden'); 
        showGiveUpScreen(); 
    });

    function giveHint() {
        if (availableHints.length > 0) {
            const hintIndex = Math.floor(Math.random() * availableHints.length);
            const hintProperty = availableHints[hintIndex];
            const hintValue = secretCharacter[hintProperty];
            let hintMessage = "";
            if (hintProperty === 'hairColor') {
                hintMessage = `The character's hair color is <strong>${hintValue}</strong>.`;
            } else if (hintProperty === 'firstAppearanceYear') {
                hintMessage = `The character first appeared in <strong>${hintValue}</strong>.`;
            } else if (hintProperty === 'anime') {
                hintMessage = `Final Hint: The anime is <strong>${hintValue}</strong>!`;
            }
            hintText.innerHTML = hintMessage; 
            hintModal.classList.remove('hidden');
            availableHints.splice(hintIndex, 1);
            document.getElementById('hint-count').textContent = `(${availableHints.length})`;
            if (availableHints.length === 0) {
                hintBtn.disabled = true;
            }
        }
    }

    function showGiveUpScreen() {
        correctAnswerText.textContent = secretCharacter.name;
        guessesStatLost.textContent = guessCount;
        giveUpModal.classList.remove('hidden');
        guessInput.disabled = true;
        guessButton.disabled = true;
        hintBtn.disabled = true;
        giveUpBtn.disabled = true;
    }

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            modal.classList.add('hidden');
            if (modal.id === 'give-up-modal') {
                resetGame();
            }
        });
    });

    document.body.addEventListener('click', () => {
        if (bgMusic.paused) bgMusic.play();
    }, { once: true });
    muteButton.addEventListener('click', () => {
        bgMusic.muted = !bgMusic.muted;
        if (bgMusic.muted) {
            muteButton.innerHTML = '<i class="fas fa-volume-xmark"></i>';
            volumeSlider.value = 0;
        } else {
            muteButton.innerHTML = '<i class="fas fa-volume-high"></i>';
            volumeSlider.value = bgMusic.volume * 100;
        }
    });
    volumeSlider.addEventListener('input', () => {
        const volumeLevel = volumeSlider.value / 100;
        bgMusic.volume = volumeLevel;
        if (volumeLevel === 0) {
            muteButton.innerHTML = '<i class="fas fa-volume-xmark"></i>';
        } else {
            muteButton.innerHTML = '<i class="fas fa-volume-high"></i>';
        }
    });

    guessButton.addEventListener('click', handleGuess);
    guessInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') handleGuess();
    });
    resetButton.addEventListener('click', resetGame);
    
    startGame();
});