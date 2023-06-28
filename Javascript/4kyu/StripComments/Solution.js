function solution(input, markers) {
    input = [...input];
    
    for (let i = 0; i < input.length; i++) {
      if (markers.includes(input[i])) {
        let removeCount = 0;
        for (let j = i; j < input.length; j++) {
          if (input[j] === '\n') {
            input.splice(j-1,1);
            break;
          }
          removeCount++;
        }
        input.splice(i-1, removeCount);
      }
    }
    input.splice(input.length-1,1);
    return input.join('');
  }
  
  console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
  