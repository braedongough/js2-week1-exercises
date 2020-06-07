const button = document.getElementById('click-here')
const body = document.querySelector('body')

// setting the colors explicitly
body.style.background = 'white'
body.style.color = 'black'

button.addEventListener('click', function onClick() {
  if (body.style.background === 'white') {
    body.style.background = 'black'
    body.style.color = 'white'
  } else {
    body.style.background = 'white'
    body.style.color = 'black'
  }
})
