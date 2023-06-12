function findUniq(arr) {
    let unique;
    if (arr[0]!=arr[1] && arr[0]!=arr[2]){
        unique = arr[0];
    }
    if (arr[1]!=arr[0] && arr[1]!=arr[2]){
        unique = arr[1];
    }
    for(let i = 0; i<arr.length; i++){
        if (arr[0]==arr[1]){
            if(arr[0]!=arr[i]){
                unique = arr[i];
            }
        }
    }

    return unique;
  }

  

  console.log(findUniq([ 0,1,0 ]));