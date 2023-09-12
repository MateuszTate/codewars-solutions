function validateCode (code) {
    code = code.toString().split('');
    if(code[0]=='1' || code[0]=='2' || code[0]=='3'){
        return true;
    }
    else return false;
    }

console.log(validateCode(248));