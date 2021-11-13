const abbreviateWords = (string) => {
   return string.replace(/\b(\w)\w+/g, '$1.').replace(/\s/g, '').replace(/\.$/, '').toUpperCase();
}

console.log(abbreviateWords('Ahmad Khaled Zughaer'));