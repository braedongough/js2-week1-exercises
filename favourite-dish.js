const favFood = ['frikadella', 'peanutbutter', 'fish tacos']
const ul = document.querySelector('#list')

for (let i = 0; i < favFood.length; i++) {
  const li = document.createElement('li')

  li.innerHTML = favFood[i]
  ul.appendChild(li)
}
