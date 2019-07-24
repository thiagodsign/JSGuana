var pais = 'Japão'

//Aqui eu usei um ternário que é bem parecido com if, mas dá a possibilidade de criar uma varável
var nacionalidade = pais == 'Brasil' ? 'Brasileiro' : 'Estrangeiro'

console.log(`Você é do ${pais},`)
console.log(`então é ${nacionalidade}.`)

console.log('----------------------------------------------------')

//Condição simples não tem else, ou seja, é composta
console.log(`Você é do ${pais},`)
if (pais == 'Brasil') {
  console.log(`então é Brasileiro.`)
} else console.log(`então é Estrangeiro.`)