function resultado() {
  var valorDeInicio = Number(document.getElementById('valorInicio').value)
  var valorFinal = Number(document.getElementById('valorFinal').value)
  var contador = Number(document.getElementById('valorDasCasas').value)

  resetarlista()

  validacaoDoFormulario();

  incrementarListaDeNumeros();

  mostrarOsNumerosContados();

  function resetarlista() {
    listaDeNumeros = []
    document.getElementById('resultado').remove();
    var textoResultado = document.createElement('div')
    var containerPagina = document.querySelector('.container')
    textoResultado.setAttribute('id', 'resultado');
    textoResultado.setAttribute('style', 'display: flex; flex-wrap: wrap;');
    containerPagina.appendChild(textoResultado);

    var listaDeMensagens = document.querySelectorAll('.formulario__mensagem_erro')

    listaDeMensagens.forEach(mensagem => {
      mensagem.classList.remove('formulario__mensagem_erro')
    });

    var listaDeInputs = document.querySelectorAll('input')

    listaDeInputs.forEach(input => {
      input.classList.remove('formulario__input_erro')
    });
  }

  function validacaoDoFormulario() {
    if (!valorDeInicio || !valorFinal || !contador) {
      if (!valorDeInicio) {
        document.querySelector('#valorInicio').classList.add('formulario__input_erro');
        document.querySelector('#valorInicio ~ .formulario__mensagem').classList.add('formulario__mensagem_erro');
      } else {
        document.querySelector('#valorInicio').classList.remove('formulario__input_erro');
        document.querySelector('#valorInicio ~ .formulario__mensagem').classList.remove('formulario__mensagem_erro');
      }

      if (!valorFinal) {
        document.querySelector('#valorFinal').classList.add('formulario__input_erro');
        document.querySelector('#valorFinal ~ .formulario__mensagem').classList.add('formulario__mensagem_erro');
      } else {
        document.querySelector('#valorFinal').classList.remove('formulario__input_erro');
        document.querySelector('#valorFinal ~ .formulario__mensagem').classList.remove('formulario__mensagem_erro');
      }

      if (!contador) {
        document.querySelector('#valorDasCasas').classList.add('formulario__input_erro');
        document.querySelector('#valorDasCasas ~ .formulario__mensagem').classList.add('formulario__mensagem_erro');
      } else {
        document.querySelector('#valorDasCasas').classList.remove('formulario__input_erro');
        document.querySelector('#valorDasCasas ~ .formulario__mensagem').classList.remove('formulario__mensagem_erro');
      }
      return
    }

    if (valorFinal <= valorDeInicio) {
      document.querySelector('#valorFinal').classList.add('formulario__input_erro');
      document.querySelector('#valorFinal ~ .formulario__mensagem').classList.add('formulario__mensagem_erro');
      return
    } else {
      document.querySelector('#valorFinal').classList.remove('formulario__input_erro');
      document.querySelector('#valorFinal ~ .formulario__mensagem').classList.remove('formulario__mensagem_erro');
    }

    if (contador > (valorFinal - valorDeInicio)) {
      document.querySelector('#valorDasCasas').classList.add('formulario__input_erro');
      document.querySelector('#valorDasCasas ~ .formulario__mensagem').classList.add('formulario__mensagem_erro');
      return
    } else {
      document.querySelector('#valorDasCasas').classList.remove('formulario__input_erro');
      document.querySelector('#valorDasCasas ~ .formulario__mensagem').classList.remove('formulario__mensagem_erro');
    }
  }

  function incrementarListaDeNumeros() {
    do {
      var adicionarNumeroInicial = listaDeNumeros.push(
        listaDeNumeros[0] === valorDeInicio ? listaDeNumeros[listaDeNumeros.length - 1] + contador : valorDeInicio
      )

      adicionarNumeroInicial;
    } while (listaDeNumeros[listaDeNumeros.length - 1] < valorFinal)
  }

  function mostrarOsNumerosContados() {
    listaDeNumeros.forEach(function (numero, index, lista) {
      if (numero <= valorFinal) {
        var textoDoResultado = document.getElementById('resultado')
        var resultados = document.createElement('span')
        var conteudo = document.createTextNode(numero + ' 👉')

        if (index === lista.length - 1) {
          var conteudo = document.createTextNode(numero + ' 🏁')
        }

        resultados.classList.add('u-margem-direita-pequena')
        resultados.appendChild(conteudo)
        textoDoResultado.append(resultados)
      }
    });
  }
}