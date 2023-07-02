function stray(numbers) {
    numbers = numbers.sort()
    if(numbers[0]!=numbers[1]) return numbers[0];
    else if(numbers[numbers.length-1]!=numbers[1]) return numbers[numbers.length-1];
  }