function imageInserter(imageUrl, elementToAppendImageTo) {
  const img = document.createElement('img')

  img.src = imageUrl

  elementToAppendImageTo.appendChild(img)
}

imageInserter('https://picsum.photos/536/354', document.querySelector('body'))

const button = document.getElementById('click-here')

button.addEventListener('click', function onClick() {
  button.innerHTML = 'Button Clicked'
})
