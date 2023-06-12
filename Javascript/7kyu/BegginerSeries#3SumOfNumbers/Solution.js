function getSum(a, b)
{

    if(a===b) return a; // return a if both are the same


    let result = 0; // variable for function output
    let num1;
    let num2;
    
    if(a>b){num1 = b; num2 = a;} // set b as a first number if a is bigger
    else if (b>a){num1 = a;num2 = b;} // opposite if b is bigger

    for(let i = num1; i<=num2; i++) // add i to the result as long as its not equal to number2
    {
        result+=i;
    }

    return result; // return output 

}

console.log(getSum(0,1))