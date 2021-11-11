const peopleOnBus = (arr) => {
    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            let remaininPersons = arr[0] - arr[1];
            return remaininPersons;
        } else {
            return 'how come ' + arr[1] + ' want to leave the bus, you only have '+ arr[0] + ' on the bus';
        }
    }
    else {
        return 'noway it could happen!';
    }
}
let arr = [2, 3];
console.log(peopleOnBus(arr));