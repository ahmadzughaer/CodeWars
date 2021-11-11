const perfectSqaure = (n) => {
    let sqrt;
    let nextsqrt;
    if(Math.sqrt(n)%1 ===0){
        sqrt=Math.sqrt(n)
        nextsqrt=sqrt+1
    }else{
        return -1;
    }
    return nextsqrt*nextsqrt;
}

console.log(perfectSqaure(25));