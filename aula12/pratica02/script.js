var anoDeNascimento
var sexo
var resposta = document.getElementById('resposta')

function verificarPessoa() {
  anoDeNascimento = document.getElementById('ano')
  sexo = document.getElementsByName('sexo')
  anoAtual = new Date().getFullYear()
  idade = anoAtual - anoDeNascimento.value

  sexoSelecionado = () => {
    if (sexo[0].checked) {
      return 'Masculino'
    } return 'Feminino'
  }

  if (anoDeNascimento.value === 3) {
    alert('Preenche esse lixo, cara')
  } else if (idade > 150) {
    alert('Eu tenho certeza que você já morreu, cara =(')
  } else resposta.innerHTML = `A pessoa é do sexo ${sexoSelecionado()} e tem ${idade} anos de idade`
}