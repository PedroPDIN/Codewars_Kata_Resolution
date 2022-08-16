const contamination = (text, char) => {
  return text.replace(/./g, char);
}

console.log(contamination("abc", "h"))