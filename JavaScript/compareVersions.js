// kata: https://www.codewars.com/kata/53b138b3b987275b46000115/train/javascript

function compareVersions(version1, version2) {
  // console.log(version1.length)
  let newVersion1 = version1.split('.').join('');
  let newVersion2 = version2.split('.').join('');
  const lengthAverage = newVersion1.length - newVersion2.length
  // console.log(Math.floor(version1), Math.floor(version2))

  if (newVersion1 === newVersion2) {
    return Math.floor(version1) >= Math.floor(version2);
  }

  if (newVersion1.length > newVersion2.length) {
    for (let i = 0; i < lengthAverage; i += 1) {
      newVersion2 *= 10;
    }
  }

  console.log(newVersion1, newVersion2)
  return parseFloat(newVersion1) >= parseFloat(newVersion2);
}

// console.log(compareVersions("1.15", "11.5"))
console.log(compareVersions ("10.9", "10.10"))