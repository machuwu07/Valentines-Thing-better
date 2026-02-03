const win = document.getElementById("window");

/* Clock */

function updateTime() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();

  if (m < 10) m = "0" + m;

  document.getElementById("time").textContent =
    h + ":" + m;
}

setInterval(updateTime, 1000);
updateTime();

/* Windows */

function show(content) {
  win.style.display = "flex";

  win.innerHTML = `
    <div class="window-box">
      ${content}
      <br><br>
      <button onclick="closeWin()">Close</button>
    </div>
  `;
}

function closeWin() {
  win.style.display = "none";
}

/* Apps */

function openMail() {
  show(`
    <h3>📩 Love Mail</h3>
    <p>You are my favorite notification 💖</p>
  `);
}

function openPhotos() {
  show(`
    <h3>📁 Photos</h3>
    <p>Our memories live here 🥰</p>
  `);
}

function openGame() {
  show(`
    <h3>🎮 Game</h3>
    <p>You win my heart every time 💘</p>
  `);
}

function openNote() {
  show(`
    <h3>📝 Note</h3>
    <p>Happy Valentine’s Day, my love 🌹</p>
  `);
}

function openStart() {
  show(`
    <h3>🌸 Start</h3>
    <p>I love you forever ♾️💗</p>
  `);
}
