import dayjs from 'dayjs'
const $now = document.getElementById('now')
const $copy = document.getElementById('copy')

$now.addEventListener('click', () => {
  navigator.clipboard.writeText(dayjs().format())
})

$copy.addEventListener('click', () => {
  navigator.clipboard.writeText(dayjs().format())
})

$now.innerText = dayjs().format()

setInterval(()=> {
  $now.innerText = dayjs().format()
}, 1000)
