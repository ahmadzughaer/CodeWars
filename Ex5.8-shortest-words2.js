const longestWord = (string) => {
    let text = string.split(' ');
    let longest = text.reduce((longWord, currentWord) => {
        return currentWord.length > longWord.length ? currentWord : longWord;
    }, text[0]);
    return 'the longest word is ' + longest;
}

console.log(longestWord('hello how are you? yo'));