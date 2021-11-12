const repeatStr =(string, n) => {
    let text =[];
    for (let i =1; i <= n; i ++)
    {
         text.push(string);
    }
    return text.join();
}

console.log(repeatStr('hi', 5));