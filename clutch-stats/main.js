import players from './players.mjs';

const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", closeModal);

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function getSelectedPlayer() {
    const playerSelected = document.querySelector("#player-select");
    const playerValue = playerSelected.value;
    return playerValue;
}

const viewStatsBtn = document.querySelector(".view-button");

viewStatsBtn.addEventListener('click', viewStats);

function viewStats() {
    const selectedName = getSelectedPlayer();
    if (!selectedName) return;

    const player = players.find(p => p.name === selectedName);

    if (player) {
        const modal = document.querySelector('.modal');
        renderPlayerModal(player);
        modal.style.display = 'block';
    }

}


function viewSelectedPlayer() {
    const selectedName = getSelectedPlayer();
    if (!selectedName) return;


    const player = players.find(p => p.name === selectedName);

    if (player) {
        const modal = document.querySelector('.modal');
        renderPlayerModal(player);
        modal.style.display = 'block';
    }
}

function renderDropdown(player) {
    const parent = document.querySelector(".player-select-container");
    parent.innerHTML = playerDropdownTemplate(player);
}

function playerDropdownTemplate(player) {
    return `
          <select id="player-select">
          <option value="">Select a Player</option>
            ${playerList(player)}
          </select>`;
}

function playerList(player) {
    let html = '';
    players.forEach(function (player) {
        html += `<option value="${player.name}">${player.name}</option>`
    })
    return html;
}


function randomNumber(list) {
    const randomNum = Math.floor(Math.random() * list.length);
    return randomNum;
}

console.log(randomNumber(players));


function getRandomPlayer(list) {
    const randomPlayer = list[randomNumber(players)];
    return randomPlayer;
}

console.log(getRandomPlayer(players));

function playerModalTemplate(player) {
    return `
        <span class="close-btn">&times;</span>
        <h1>ClutchStats Player Statistics</h1>
        <div class="player-stats-container">
          <div class="player-img">
            <img class="player-modal-img" src='${player.image}' alt="">
          </div>
          <div class="player-stats">
            <div class="player-stats-text">
              <h3>${player.name}</h3>
              <p class="team-name">${player.team}</p>
              <h4>Season Stats</h4>
              <div class="player-stats-grid">
                <div><strong>PPG: </strong>${player.stats.ppg}</div>
                <div><strong>APG: </strong>${player.stats.apg}</div>
                <div><strong>RP: </strong>${player.stats.rpg}</div>
                <div><strong>FG: </strong>${player.stats.fgPercent}%</div>
                <div><strong>3PT: </strong>${player.stats.threePtPercent}%</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="player-bio"></div>
          <h4>Player Bio:</h4>
          <p>${player.bio}</p>
        </div>`;
}

function renderPlayerModal(player) {
    const parent = document.querySelector(".modal-content");
    parent.innerHTML = playerModalTemplate(player);

    const closeButton = parent.querySelector(".close-btn");
    closeButton.addEventListener("click", closeModal);
};

function featuredPlayerTemplate(player) {
    return `<div class="featured-info">
          <h1>Featured Player</h1>
          <h4 class="featured-player">${player.name}</h4>
          <p class="featured-reason">${player.featuredReason}</p>
            <button class="view-stats">View Stats</button>
        </div>
        <div class="featured-image">
          <img src='${player.image}' alt="">
        </div>`
}

function renderFeaturedPlayer(player) {
    const parent = document.querySelector(".featured-player-container");
    parent.innerHTML = featuredPlayerTemplate(player);

    const viewStatsButton = parent.querySelector(".view-stats");
    viewStatsButton.addEventListener('click', viewPlayerStats);
}

const viewFeaturedStatsBtn = document.querySelector(".view-stats");

viewFeaturedStatsBtn.addEventListener('click', viewPlayerStats);

function viewPlayerStats() {
    const featuredPlayerElement = document.querySelector('.featured-player');
    const featuredPlayerName = featuredPlayerElement.textContent.trim();

    const matchedPlayer = players.find(player => player.name === featuredPlayerName);

    if (matchedPlayer) {
        const modal = document.querySelector('.modal');
        renderPlayerModal(matchedPlayer);
        modal.style.display = 'block';
    } else {
        console.log('Player not found');
    }
}


function init() {
    renderDropdown(players);
    const player = getRandomPlayer(players)
    renderFeaturedPlayer(player);
}

init();