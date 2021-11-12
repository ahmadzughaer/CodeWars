const camelCase = (string) => {
    let newString = '';
    let firstWord = string.split(/[ -_]/g)[0];
    let text = string.split(/[ -_]/g)
        .slice(1).map((word) => word.replace(word[0],
            word[0].toString().toUpperCase())).join('')
    return newString.concat(firstWord,text);
}
console.log(camelCase('hello-world_hey'));
