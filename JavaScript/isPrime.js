function isPrime(n) {
  // exceto 0 2, qualquer par não é primo
  // logo. podemos sempre retornar 2 caso o input n seja par

  if (n === 2) {
    return 1;
  }

  if (n % 2 === 0) {
    return 2;
  }
  
  for (let index = 3; index <= n; index += 1) {
    if (index === n) { 
      return 1;
    }

    if (n % index === 0) { 
      return index
    }
  }
}

// ou

function isPrime(n) {
  for (let x = 2; x < n; x+= 1) {
    if ( n % x === 0 ) {
      return x
    }
  }

  return 1
} 

console.log(isPrime(50));
