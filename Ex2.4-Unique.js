const unique = (arr) => {
    if(arr.length >= 3) {
        for(let i=0; i <= arr.length; i++) {
            if (arr[i] !== arr[i+1]) {
                let uniqueNum = arr[i+1];
                return uniqueNum;
            }
        }
    }
}

console.log(unique([2,1,2,2]));