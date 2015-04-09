var convert = function(input) {
    var input_array = input.split('').reverse();
    var decimal_array = [];
    var index = 0;
    var total = 0;

    while(input_array.length > 0) {
        if( parseInt(input_array[0]) === 1) {
        decimal_array.push(Math.pow(2, index));
        input_array.shift();
        index += 1
    } else {
        input_array.shift();
        index += 1
    }
    }

    decimal_array.forEach(function(number) {
        total += number;
    });
    return total;
}
