const maxPlayers = 10;
let players = [];

document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("playerName").value.trim();
  const statusMessage = document.getElementById("statusMessage");

  if (!name) {
    statusMessage.textContent = "Введите имя!";
    return;
  }

  if (players.length >= maxPlayers) {
    statusMessage.textContent = "Места закончились!";
    return;
  }

  players.push(name);
  updatePlayerList();
  statusMessage.textContent = "Вы успешно зарегистрированы!";
  document.getElementById("playerName").value = "";
});

function updatePlayerList() {
  const list = document.getElementById("playerList");
  list.innerHTML = "";
  players.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player;
    list.appendChild(li);
  });
}

// Таймер обратного отсчёта
const eventDate = new Date();
eventDate.setHours(eventDate.getHours() + 1); // старт через 1 час

function updateTimer() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("timer").textContent = "Игра началась!";
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").textContent =
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

setInterval(updateTimer, 1000);
updateTimer();
