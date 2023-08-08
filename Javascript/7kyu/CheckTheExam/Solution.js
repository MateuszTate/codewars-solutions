function checkExam(array1, array2) {
    let result = 0; // variable for total sum of points
    for (let index = 0; index < array1.length; index++) {
        if(array2[index]==''){
            result+=0; // if its empty do nothing
        }
        else if(array1[index] == array2[index]){
            result+=4; // if its correct add 4
        }
        else if(array1[index] != array2[index]){
            result--; // if its wrong decrease by one
        }
        
    }
    if(result<0) result = 0; // if sum of points is lower than 0 
    return result; // return sum of points
   }