'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let acum = 0;

  for(let i = 0; i < num.length;i++){
    acum += num[i] * Math.pow(2,num.length-1-i);
  }

  return acum;

//let acum =0;

//num = num.split("").reverse();

//for(let i = 0; i < num.length;i++){
//  resultado += num[i]* 2**i ;
//}

//return acum;
}


function DecimalABinario(num) {
  // tu codigo aca
  //return num.toString(2);
  let acum = [];
  
  while(num !== 0){
    acum.unshift(num%2);
    num = parseInt(num/2);
  }

  return acum.join("");
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}