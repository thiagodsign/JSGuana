const tituloTempo = document.querySelector('[name=tempo]')
var hora = new Date().getHours()

tituloTempo.innerHTML = horário()

function horário() {
  return hora < 12 && hora > 5 ? 'Está de dia' : hora < 19 && hora > 5 ? 'Está de noite' : 'Está de noite'
}

