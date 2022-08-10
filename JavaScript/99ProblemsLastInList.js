const last = (a) => {
  if (a.length === 0) {
    return null;
  } else {
    return a[a.length - 1];
  }
}

console.log(last([]))