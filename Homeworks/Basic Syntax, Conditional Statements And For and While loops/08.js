function gladiator(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let total=0;
    let brokenHelmets=Math.floor(lostFights/2)*helmetPrice;
    let brokenSwords=Math.floor(lostFights/3)*swordPrice;
    let brokenShield=Math.floor(lostFights/6)*shieldPrice;
    let brokenArmor=Math.floor(lostFights/12)*armorPrice;
    total=brokenArmor+brokenHelmets+brokenShield+brokenSwords;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
    
}
gladiator(7,2,3,4,5);