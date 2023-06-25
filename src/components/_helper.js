import metalClick from '../assets/sounds/metal-click.mp3'
import BackgroundSound from "../assets/sounds/background_sound.mp3"
import ratchetSound from '../assets/sounds/ratchet-click.mp3'
import roboClickSound from '../assets/sounds/robo-click.mp3'
import buzzerSound from '../assets/sounds/buzzer.mp3'
import connectSound from '../assets/sounds/mic-connect.mp3'

const mobile = window.matchMedia("(max-width: 500px)")

const metalAudio = new Audio(metalClick)
const ratchetAudio = new Audio(ratchetSound)
const backgroundAudio = new Audio(BackgroundSound)
const roboClickAudio = new Audio(roboClickSound)
const buzzerAudio = new Audio(buzzerSound)
const connectAudio = new Audio(connectSound)

const startBackground = () => {
    backgroundAudio.loop = true
    backgroundAudio.currentTime = 0
    backgroundAudio.play()
    .then(success => console.log(success))
    .catch(error => console.log(error))
  }

const startRachet = () => {
    ratchetAudio.currentTime = 0
    ratchetAudio.play()
    .then(success => console.log(success))
    .catch(error => console.log(error))
  }
  
const startMetal = () => {
    if (mobile.matches) return
    metalAudio.currentTime = 0
    metalAudio.play()
    .then(success => console.log(success))
    .catch(error => console.log(error))
  }

  const startRoboClick = () => {
    roboClickAudio.currentTime = 0
    roboClickAudio.play()
    .then(success => console.log(success))
    .catch(error => console.log(error))
  }

  const startDisabled = () => {
    buzzerAudio.currentTime = 0
    buzzerAudio.play()
    .then(success => console.log(success))
    .catch(error => console.log(error))
  }

  const startConnect = () => {
    connectAudio.currentTime = 0
    connectAudio.play()
    .then(success => console.log(success))
    .catch(error => console.log(error))
  }


  export { startBackground, startRachet, startMetal, startRoboClick, startDisabled, startConnect }
