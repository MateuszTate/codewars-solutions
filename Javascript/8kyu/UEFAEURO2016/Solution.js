function uefaEuro2016(teams, scores){
    let result = "At match "+ teams[0] + " - " + teams[1] + ", ";
    if(scores[0]>scores[1]){
        result += teams[0];
        result += " won!";
    }
    else if(scores[1]>scores[0]){
        result += teams[1];
        result += " won!";
    }
    else result += "teams played draw.";
    return result;
    
  }

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));