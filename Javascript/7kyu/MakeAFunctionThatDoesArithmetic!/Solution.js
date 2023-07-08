function arithmetic(a, b, operator){
    switch(operator){ // simple switch case, nothing to explain
        case "add":
            return a+b;
        case "subtract":
            return a-b;
        case "multiply":
            return a*b;
        case "divide":
            return a/b;
    }
  }

console.log(arithmetic(8, 2, "subtract"));