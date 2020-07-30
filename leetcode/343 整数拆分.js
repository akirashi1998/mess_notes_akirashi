var integerBreak = function(n) {
    if(n<4)return n-1
    switch(n%3){
        case 0: return 3**(n/3)
        case 1: return 3**(Math.floor(n/3)-1)*4
        case 2: return 3**(Math.floor(n/3))*2
    }
};