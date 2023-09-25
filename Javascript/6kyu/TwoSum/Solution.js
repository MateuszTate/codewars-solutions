function twoSum(numbers, target) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {

        for (let i = 1; i < numbers.length; i++) {
            if(numbers[index] + numbers[i] == target){
                result.push(index);
                result.push(i);
            }
            else {}
        }
        
    }
    return [result[0], result[1]];
}

console.log(twoSum([1234, 5678, 9012], 14690));