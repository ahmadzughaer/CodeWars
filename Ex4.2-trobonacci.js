const  tribonacci = (signature,n) => {
    let tribo = signature;
    for ( let i = 3; i < n; i++) {
        tribo.push((tribo[i-1] + tribo[i-2] + tribo[i-3]));
    }
    return tribo.slice(0, n);
  }

  console.log(tribonacci([0, 0, 1],10));