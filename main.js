import dayjs from 'dayjs'
const $now = document.getElementById('now')

document.body.addEventListener('click', () => {
  navigator.clipboard.writeText(dayjs().format())
})

$now.innerText = dayjs().format()

setInterval(()=> {
  $now.innerText = dayjs().format()
}, 1000)
