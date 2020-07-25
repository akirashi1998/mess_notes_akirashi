var minArray = function(numbers) {
    for(var i = 0;i<numbers.length - 1;i++){
        if(numbers[i]>numbers[i+1]) return numbers[i + 1]
    }
    return numbers[0]
};

