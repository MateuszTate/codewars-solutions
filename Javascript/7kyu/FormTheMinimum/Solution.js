function minValue(values){
    values = values.sort();
    let arr = [...new Set(values)];
    let asStr = arr.join('');
    return Number(asStr);
  }

console.log(minValue([1,3,1]));