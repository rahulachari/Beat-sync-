const socket = io();
const audio = document.getElementById("player");

// Preload and pause immediately (helps browser buffer audio)
audio.load();
audio.pause();

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("play_now", () => {
  console.log("Received play signal");

  audio.currentTime = 0;

  audio
    .play()
    .then(() => {
      console.log("Audio started");
    })
    .catch((err) => {
      console.error("Playback failed: ", err);
      alert("Tap the play button once to enable audio.");
    });
});

function sendPlay() {
  socket.emit("play_audio");
}
if (Math.abs(audio.currentTime - 0) > 0.2) {
  audio.playbackRate = 1.05; // Speed up slightly for minor correction
  setTimeout(() => (audio.playbackRate = 1.0), 2000);
}
