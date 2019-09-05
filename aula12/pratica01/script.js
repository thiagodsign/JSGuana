var horaAtual = new Date().getHours()
var madrugada = horaAtual <= 6
var manha = horaAtual <= 12 && horaAtual > 6
var tarde = horaAtual <= 19 && horaAtual > 12

function periodoDoDia() {
  if (madrugada) return 'Madrugada'
  else if (manha) return 'Manhã'
  else if (tarde) return 'Tarde'
  else return 'Noite'
}

function imagemDoHorario() {
  if (manha) return './ativos/img-02.png'
  else if (madrugada) return './ativos/img-01.png'
  else if (tarde) return './ativos/img-03.png'
  else return './ativos/img-01.png'
}

function corDoPeriodo() {
  if (manha) return '#fbc390'
  else if (madrugada) return '#554859'
  else if (tarde) return '#e9b792'
  else return '#18122b'
}

function mudarACorDoFundo() {
  document.body.style.backgroundColor = corDoPeriodo();
}

function monstarImagem() {
  var imagem = imagemDoHorario()
  document.getElementById('imagem').src = imagem
}

var periodo = periodoDoDia()

function mostrarFraseComHorarioDoDia() {
  document.querySelector('.texto').innerHTML = `Bom dia. Agora é o periodo da <strong>${periodo}</strong>.`
}

mostrarFraseComHorarioDoDia()
monstarImagem()
mudarACorDoFundo()

