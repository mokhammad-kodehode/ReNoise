const soundsData = {
  bonfire: {
    title: "Bonfire",
    soundSource: "sounds/bonfire.wav",
    videoSource: "Video/fire.mp4",
  },
  rain: {
    title: "Rain",
    soundSource: "sounds/rain.wav",
    videoSource: "Video/Raindrops.mp4",
  },
  forest: {
    title: "Forest",
    soundSource: "sounds/forest.wav",
    videoSource: "Video/forest.mp4",
  },
  thunder: {
    title: "Thunder",
    soundSource: "sounds/thunder.wav",
    videoSource: "Video/thunder.mp4",
  },
  sea: {
    title: "Sea",
    soundSource: "sounds/sea.wav",
    videoSource: "Video/sea.mov",
  },
};

const fire = document.getElementById("bonfire");
const rain = document.getElementById("rain");
const forest = document.getElementById("forest");
const thunder = document.getElementById("thunder");
const sea = document.getElementById("sea");

const playButton = document.querySelector(".play-button");
const volumeSlider = document.querySelector(".volume-slider");
const titleElement = document.querySelector(".title");
const videoElement = document.querySelector("video");
const audioElement = new Audio();
let isPlaying = false;

let currentSound = soundsData.rain;

sea.addEventListener("click", () => {
  currentSound = soundsData.sea;
  updatePlayer(currentSound);
  videoElement.pause();
  audioElement.pause();
  playButton.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
});

fire.addEventListener("click", () => {
  currentSound = soundsData.bonfire;
  updatePlayer(currentSound);
  videoElement.pause();
  audioElement.pause();
  playButton.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
});

rain.addEventListener("click", () => {
  currentSound = soundsData.rain;
  updatePlayer(currentSound);
  videoElement.pause();
  audioElement.pause();
  playButton.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
});

forest.addEventListener("click", () => {
  currentSound = soundsData.forest;
  updatePlayer(currentSound);
  videoElement.muted = true;
  videoElement.pause();
  audioElement.pause();
  playButton.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
});

thunder.addEventListener("click", () => {
  currentSound = soundsData.thunder;
  updatePlayer(currentSound);
  videoElement.muted = true;
  videoElement.pause();
  audioElement.pause();
  playButton.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
});

videoElement.addEventListener("ended", () => {
  videoElement.currentTime = 0; // Вернуть текущее время в начало
  videoElement.play(); // Начать воспроизведение заново
});

audioElement.addEventListener("ended", () => {
  audioElement.currentTime = 0; // Вернуть текущее время в начало
  audioElement.play(); // Начать воспроизведение заново
});

playButton.addEventListener("click", () => {
  if (isPlaying) {
    videoElement.pause();
    audioElement.pause();
    isPlaying = false;
    playButton.innerHTML = '<i class="fa-solid fa-circle-play play"></i>'; // Значок плей
  } else {
    videoElement.src = currentSound.videoSource;
    videoElement.play();
    audioElement.src = currentSound.soundSource;
    audioElement.play();
    isPlaying = true;
    playButton.innerHTML = '<i class="fa-solid fa-pause pause play"></i>'; // Значок паузы
  }
});

function updatePlayer(sound) {
  titleElement.textContent = sound.title;
  videoElement.src = sound.videoSource;
  audioElement.src = sound.soundSource;
}

volumeSlider.addEventListener("input", () => {
  audioElement.volume = volumeSlider.value / 100;
});
