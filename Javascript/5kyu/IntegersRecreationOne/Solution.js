function listSquared(m, n) {
    function getDivisorsSumSquare(num) {
        let divisors = [];
        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                divisors.push(j);
            }
        }
        
        let sumOfDivisors = divisors.reduce((sum, divisor) => sum + divisor * divisor, 0);
        return sumOfDivisors;
    }

    let result = [];
    for (let i = m; i <= n; i++) {
        let sumOfDivisorsSquare = getDivisorsSumSquare(i);
        let sqrtSum = Math.sqrt(sumOfDivisorsSquare);
        if (sqrtSum === Math.floor(sqrtSum)) {
            result.push([i, sumOfDivisorsSquare]);
        }
    }
    
    return result;
}

console.log(listSquared(1, 250));
