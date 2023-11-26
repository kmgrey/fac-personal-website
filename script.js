function toggleImage() {
    let image = document.getElementById('selfie')
    let currentImage = image.src
    if (currentImage.endsWith("me.jpg")) {
      image.src = "./images/minerva.jpg"
    } else {
      image.src = "./images/me.jpg"
    }
}

function playClick() {
    const audio = new Audio("./audio/mouse-click.mp3")
    audio.play()
}

const soundSources = ["./audio/anime-wow.mp3" , "./audio/squeak.mp3"]
let currentSoundIndex = 0
function playSilly() {
    let audio = new Audio(soundSources[currentSoundIndex])
    audio.play()
    currentSoundIndex = (currentSoundIndex + 1) % soundSources.length
}

const rickRoll = new Audio("./audio/rick-roll.mp3")
function playRickRoll() {
    if (rickRoll.paused) {
      rickRoll.play()
    }
}

function pauseRickRoll() {
    if (rickRoll.play) {
      rickRoll.pause()
    }
}

