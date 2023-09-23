import './style.css'

const btnPomodoro = document.querySelector('#btnPomodoro')
const btnShort = document.querySelector('#btnShort')
const btnLong = document.querySelector('#btnLong')
const btnControl = document.querySelector('#btnControl')

const circle = document.getElementById('circle')

const timeText = document.querySelector('#timeText')
const controlText = document.querySelector('#controlText')

const audioBreak = new Audio('./src/assets/audio/break.ogg')
const audioFinished = new Audio('./src/assets/audio/terminaste.ogg')

const times = {
  pomodoro: 30,
  short: 5,
  long: 15
}

let time = times.pomodoro * 60
let interval = null

//Init animation timer
const radius = circle.r.baseVal.value
const circumference = radius * 2 * Math.PI

const initTimer = () => {
  interval = setInterval(() => {
    time = time - 1

    const minutesResult = Math.floor(time / 60)
    const secondsResult = Math.round((time / 60 - minutesResult) * 60)

    timeText.textContent = `${minutesResult}:${
      secondsResult >= 10 ? secondsResult : '0' + secondsResult
    }`

    //animation
    animateTimerCircle()

    if (time <= 0) {
      clearInterval(interval)
      audioBreak.play()
    }
  }, 1000)
}

btnControl.addEventListener('click', () => {
  if (controlText.textContent.toLowerCase() === 'pause') {
    controlText.textContent = 'PLAY'
    clearInterval(interval)
  } else {
    controlText.textContent = 'PAUSE'
    initTimer()
  }
})

btnPomodoro.addEventListener('click', (e) => {
  toggleActiveButton(btnPomodoro)
  changeTime(times.pomodoro)
})
btnShort.addEventListener('click', () => {
  toggleActiveButton(btnShort)
  changeTime(times.short)
})
btnLong.addEventListener('click', () => {
  toggleActiveButton(btnLong)
  changeTime(times.long)
})

const changeTime = (type) => {
  time = type * 60
  timeText.textContent = `${type}:00`
  if (interval) clearInterval(interval)
  controlText.textContent = 'PLAY'

  animateTimerCircle()
}

const toggleActiveButton = (button) => {
  const elements = document.getElementsByClassName('bg-[#f97070]')
  if (elements.length > 0) {
    const element = elements[0]
    element.classList.remove('text-[#341e3b]', 'bg-[#f97070]')
    element.classList.add('text-[#565a73]')
  }

  button.classList.add('bg-[#f97070]', 'text-[#341e3b]')
  button.classList.remove('text-[#565a73]')
}

const getTimeType = () => {
  const elements = document.getElementsByClassName('bg-[#f97070]')
  const element = elements[0].textContent.split(' ').join('')
  if (element === 'pomodoro') return times.pomodoro
  if (element === 'shortbreak') return times.short
  return times.long
}

const animateTimerCircle = () => {
  const timeType = getTimeType()
  const percent = (time / (timeType * 60)) * 100
  const offset = circumference - (percent / 100) * circumference
  circle.style.strokeDasharray = `${circumference} ${circumference}`
  circle.style.strokeDashoffset = circumference
  circle.style.strokeDashoffset = offset
}
