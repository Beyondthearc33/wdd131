import players from './players.mjs';

// const closeButton = document.querySelector()


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
    return `<div id="myModal" class="modal">
    <div class="modal-content">
          <span class="close-btn">&times;</span>
          <h1>ClutchStats Player Statistics</h2>
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
                    <div><strong>APG: </strong>${player.stats.rpg}</div>
                    <div><strong>RP: </strong>${player.stats.apg}</div>
                    <div><strong>FG: </strong>${player.stats.fgPercent}%</div>
                    <div><strong>3PT: </strong>${player.stats.threePtPercent}%</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="player-bio"></div>
              <h4>Player Bio:</h4>
              <p>${player.bio}
</p>
            </div>
        </div>
        </div>`
}



function renderPlayerModal(player) {
    const parent = document.querySelector(".modal-content");
    parent.innerHTML = playerModalTemplate(player);
};

function init() {
    const player = getRandomPlayer(players)
    renderPlayerModal(player);
}
init();