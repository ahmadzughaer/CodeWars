const nbYear = (pO, percent, aug, p) => {

    let percentage = percent / 100;
    let numYears = 0;


    while (true) {
        if (pO >= p) { 
            return numYears; 
        }
        pO = pO + (pO * percentage) + aug; 
        numYears++;
    }
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));