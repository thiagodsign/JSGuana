var idade = 25
var deficiencia = true

if (idade < 16) {
  console.log('Não vota') 
} else if (idade < 18 || idade > 65 || deficiencia) {
  console.log('Voto opcional')
} else console.log('Voto obrigatório')