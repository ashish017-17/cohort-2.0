function swapNumbers(a, b) {   

    [a, b] = [b, a];

    console.log(a);
    console.log(b);

}

module.exports = swapNumbers;