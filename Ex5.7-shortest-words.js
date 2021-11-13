const shortestWord =(string) => {
    let text = string.split(' ');
    let shortest = text.reduce((shortWord, currentWord) => {
        return currentWord.length < shortWord.length ? currentWord : shortWord;
    }, text[0]);
    return 'the length of the shortest word is '+ shortest.length;
}

console.log(shortestWord('hello there how are you? yo'));