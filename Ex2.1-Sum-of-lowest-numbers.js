let arr = [3, 4, 5, 1, 5.5];
const sumOfLowestNum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.length >= 4 && arr[i] % 1 === 0) {
            let min = Math.min(arr[i]);
            let secondMin = Math.min.apply(null, arr.filter(n => n != min));
            return min + secondMin
        }
        else {
            return 'enter just intergers';
        }

    }
}

console.log(sumOfLowestNum(arr));