function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
  }
  

function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {  // continue while loop as long as at least one of fighters is alive
      if (fighter1.name === firstAttacker) {
        fighter2.health -= fighter1.damagePerAttack; // reduce fighter2 hp by fighter1 damage value if fighter1 is first attacker
        if (fighter2.health <= 0){
          return fighter1.name; // if fighter2 is dead return fighter1 name as a winner
        }
        fighter1.health -= fighter2.damagePerAttack; // reduce fighter1 hp by fighter2 damage value
        if (fighter1.health <= 0){
          return fighter2.name; // if fighter1 is dead return fighter2 name as a winner
        }
      } else { // same but when fighter2 is a fist attacker
        fighter1.health -= fighter2.damagePerAttack;
        if (fighter1.health <= 0){
          return fighter2.name;
        }
        fighter2.health -= fighter1.damagePerAttack;
        if (fighter2.health <= 0){
          return fighter1.name;
        }
      }
    }
  }
  
  console.log(
    declareWinner(
      new Fighter("Lew", 10, 2),
      new Fighter("Harry", 5, 4),
      "Lew"
    )
  );
  