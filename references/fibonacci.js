function sumOfEvenFibsLessThan (n) {

    /* Returns the array of Fibonacci numbers less than n */
    var fibsLessThan = function (n) {

        /* Takes an Array, returns an Array */
        var generateFibs = function(fibs) {
            var nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
            // test against max
            if (nextFib >= n) {
                return fibs;
            }
            else {
                // concatinate next number to array
                return generateFibs(fibs.concat([nextFib]));
            }
        };
        // check input validity
        if (n <= 1) {
            return [];
        };
        // check base case
        if (n <= 2) {
            return [1,1];
        };
        // otherwise generate array recursively
        return generateFibs([1,1]);
    };

    return fibsLessThan(n).filter(x => x % 2 === 0).reduce((x,y) => x + y);
}


console.log(sumOfEvenFibsLessThan(4000000));