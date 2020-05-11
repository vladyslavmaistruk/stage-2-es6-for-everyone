import { controls } from '../../constants/controls';
import { fightersDetails } from '../helpers/mockData';

export async function fight(firstFighter, secondFighter) {

  let {health: healthFirstFigtter} = firstFighter;
  let {health: healthSecondFigtter} = secondFighter;

  
  runOnHits([controls.PlayerOneAttack], () => {
    healthSecondFigtter -= getDamage(firstFighter);
    console.log(`healthFirstFigtter = ${healthFirstFigtter}`, `healthSecondFigtter = ${healthSecondFigtter}`);
  });
  
  runOnHits([controls.PlayerTwoAttack], () => {
    healthFirstFigtter -= getDamage(secondFighter);
    console.log(`healthFirstFigtter = ${healthFirstFigtter}`, `healthSecondFigtter = ${healthSecondFigtter}`);
  });

  runOnHits([controls.PlayerOneAttack, controls.PlayerTwoBlock], () => {
    healthSecondFigtter -= getDamage(firstFighter, secondFighter);
    console.log(`healthFirstFigtter = ${healthFirstFigtter}`, `healthSecondFigtter = ${healthSecondFigtter}`);
  });

  runOnHits([controls.PlayerOneBlock, controls.PlayerTwoAttack], () => {
    healthFirstFigtter -= getDamage(firstFighter, secondFighter);
    console.log(`healthFirstFigtter = ${healthFirstFigtter}`, `healthSecondFigtter = ${healthSecondFigtter}`);
  });

  runOnHits(controls.PlayerOneCriticalHitCombination, () => {
    console.log(controls.PlayerOneCriticalHitCombination);
    healthSecondFigtter -= (2 * getDamage(firstFighter));
    console.log(`healthFirstFigtter = ${healthFirstFigtter}`, `healthSecondFigtter = ${healthSecondFigtter}`);
  });

  runOnHits(controls.PlayerTwoCriticalHitCombination, () => {
    healthFirstFigtter -= (2 * getDamage(secondFighter));
    console.log(`healthFirstFigtter = ${healthFirstFigtter}`, `healthSecondFigtter = ${healthSecondFigtter}`);
  });


  document.addEventListener('keyup', () => {
    let winner = null;
    
    if( healthSecondFigtter <= 0) {
      winner = firstFighter;
    } 
    else if (healthFirstFigtter <= 0) {
      winner = secondFighter;
    }
    if(winner) {
       console.log(`${winner.name} wins`);
      return new Promise((resolve) => {
        // resolve the promise with the winner when fight is over
        // console.log(console.log(`${winner.name} wins`));
        resolve(winner.name);
    
      });
    } else {console.log(`There is no winner for now`)}
  })
  
}

// listennes fot one action

export function runOnHits( codes = [], callback = () => {}) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);

    for (let code of codes) { // if all of keys are pressed
      if (!pressed.has(code)) {
        return;
      }
    }
    
    pressed.clear();

    callback();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}


/*
export function runOnHits( controls, callback = () => {}) {
  let pressed = new Set();controlMatchcontrolMatch

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);

    let controlMatch = null;

    for(let control in controls) {
      for (let code of control) { // if all of keys are pressed
        if (!pressed.has(code)) {
          controlMatch = null;
          break;
        } else controlMatch = control;
      }
    }

    if(controlMatch) {
      pressed.clear();

      callback(controlMatch);
    } else return;
  
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}
 export function executeHits (control) {
   switch (control) {
    case 'PlayerOneAttack': 
   }
      
 }
 */


export function getDamage(attacker, defender = null) {
  // return damage
  const attack = getHitPower(attacker);
  const defense = defender ? getBlockPower(defender) : 0;
  const damage = attack - defense;
  if (damage > 0) {
    console.log(damage);
    return damage;
  }
  else return 0
}

export function getHitPower(fighter) {
  // return hit power
  const { attack } = fighter;
  const criticalHitChance = Math.random() + 1;
  
  return attack * criticalHitChance;

}

export function getBlockPower(fighter) {
  // return block power
  const { defense } = fighter;
  const dodgeChance = Math.random() + 1;

  return defense * dodgeChance;
}
