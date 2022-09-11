// kata: https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

function findAdmin(list, lang) {
  const listFilter = list
    .filter(({ language, githubAdmin }) => language === lang && githubAdmin === 'yes');
  return listFilter;
}

const list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

console.log(findAdmin(list1, 'JavaScript'))