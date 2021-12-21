let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! '')
console.log(!!'texto')
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
cconsole.log(!!'')
console.log(!!null)
console.log(!!Nan)
console.log(!!undefinied)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.loog(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')