// https://www.todamateria.com.br/divisao-dos-seculos/#:~:text=Truques%20para%20saber%20sempre%20qual,1%20%3D%207%20%3D%20s%C3%A9culo%20VII%20d.C.


function century(year) {
  if (year >= 1 && year <= 100) return 1;

  const arrYear = String(year).split("");
  const startYear = arrYear.slice(0, arrYear.length - 2)
  const endYear = arrYear.slice(arrYear.length - 2);
  
  if (+endYear.join("") === 00) {
    return +startYear.join("");
  };

  return +startYear.join("") + 1;
}

// console.assert(century(1705) === 18, 'É esperado o valor(Século) 18')
// console.assert(century(89) === 1, 'É esperado o valor(Século) 1')
// console.assert(century(630) === 7, 'É esperado o valor(Século) 7')
console.assert(century(758068) === 7581, 'É esperado o valor(Século) 7581')


// Outra alternativa para resolver esse problema é utilizar o Math.ceil 
