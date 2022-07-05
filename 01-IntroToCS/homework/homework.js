'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // No usar toString() ni parseInt()
  let arrayDN=[]
  let binDec= 0, resto= 0 
  while( num > 0){
    resto = num % 10
    num = Math.floor(num/10)
    arrayDN.push(resto)
  }
  for(let i=0; i< arrayDN.length; i++){
    binDec = binDec + arrayDN[i]* 2**i
  }
  return binDec
}

function DecimalABinario(num) {
  // tu codigo aca
  // No usar toString() ni parseInt()
  let arrayBin=[]
  let resto=0
  while( num >= 1){
    resto = num % 2
    num = Math.floor(num/2)
    arrayBin.push(resto)
  }
  return arrayBin.reverse().join('')
 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}