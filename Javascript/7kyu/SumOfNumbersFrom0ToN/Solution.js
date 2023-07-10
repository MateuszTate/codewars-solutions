var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if(count<0) return count+'<0';
      else if(count===0) return '0=0'; // return if count is not higher than 0
      else if(count>0){
        let resultStr = '';
        let result = 0; // create str variable and number variable if count is higher than 0
        for(let i = 0; i<count; i++){
            resultStr += i+'+';
            result += i; // for every i add current i and '+' to make smth like "0+1+2+3 etc.", its important to set i<count not i<=count because if I would set i<=count the end of resultStr would look like '...5+6+ = 21' and I want it to be '...5+6 = 21'
        }
        result+=count;
        resultStr+=count + ' = '+result; // add count so in my example it is 6 to the string, because of i<count last number of for loop wasnt added, and add result so in my example 21
        return resultStr; // return resultStr as function output
      }
      
    };
  
    return SequenceSum;
  
  })();

console.log(SequenceSum.showSequence(6));