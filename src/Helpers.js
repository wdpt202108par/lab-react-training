function genRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function colorToHex(color) {
  let hexadecimal = color.toString(16);
  return hexadecimal.length === "1" ? "0" + hexadecimal : hexadecimal;
}

function rgbToHex(r, g, b) {
  return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
}

function formatDate(month, year) {
  month = month.length === "1" ? "0" + month : month;
  year = String(year).slice(2);

  return month + "/" + year;
}

export { rgbToHex, genRandomNum, formatDate };