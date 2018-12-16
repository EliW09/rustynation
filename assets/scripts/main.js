let i = 0
const main = 'Rusty Nation'
const mspeed = 275

const typeWriter = () => {
  if (i < main.length) {
    document.getElementById('name').innerHTML += main.charAt(i)
    i++
    setTimeout(typeWriter, mspeed)
  }
}

const scroll = () => {
    window.location.href="#serv"
}

module.exports = {
  typeWriter,
  scroll
}