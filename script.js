const h1 = document.querySelector('h1')

let hr = 0,
  min = 0,
  sec = 0,
  intervalID,
  time = `00:00:00`

h1.innerText = time

const start = () => {
  intervalID = setInterval(() => {
    if (sec < 59) sec++
    else if (min < 59) {
      min++
      sec = 0
    } else {
      hr++
      min = 0
    }
    let strHr = hr.toString().padStart(2, '0')
    let strMin = min.toString().padStart(2, '0')
    let strSec = sec.toString().padStart(2, '0')

    time = `${strHr}:${strMin}:${strSec}`
    h1.innerText = time
  }, 1000)
}

const stop = () => {
  clearInterval(intervalID)
}

const reset = () => {
  clearInterval(intervalID)
  hr = 0
  min = 0
  sec = 0
  h1.innerText = '00:00:00'
}
