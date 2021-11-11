const yearsAndCenturies = (year) => {
    if( year%10 ==0 ) {
        return year/100
    }

    else {
        let yearNum = year/100 +1;
        return parseInt(yearNum);
    }
}

console.log(yearsAndCenturies(1231));