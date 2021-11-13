const mask = (value) => {
 return value.split('').map((element, index) => index < value.length -4 ? '#' : element).join('');

}

console.log(mask('87667867655'));