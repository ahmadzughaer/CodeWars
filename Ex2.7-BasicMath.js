const calculator = (str, num1, num2) => {
    if (str === '+') {
        return num1+num2;
    }
   else if (str === '-') {
        return num1-num2;
    }

    else if (str === '*') {
        return num1*num2;
    }
    else if (str === '/') {
        return num1/num2;
    }
}

console.log(calculator('-', 1,3));