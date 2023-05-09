let githubText = "not yet"
async function getWeaponData(){
  githubText = await fetch("https://raw.githubusercontent.com/splatcraft/splatcraft-forge/1.16.5/stable/src/main/java/net/splatcraft/forge/registries/SplatcraftItems.java")
  await githubText.text().then(
    (data) => {
      githubText = data
    }
  )
  return githubText
}
function getShooter(name){
  return eval(eval(`regex = /new ShooterItem\\(new WeaponSettings\\(\\"${name}(?:[^;]*);/gm`).exec(githubText)[0].replace(/\n/gm, "").replace(/f\)/gm,")"))
}
function getBlaster(name){
  return eval(eval(`regex = /new BlasterItem\\(new WeaponSettings\\(\\"${name}(?:[^;]*);/gm`).exec(githubText)[0].replace(/\n/gm, "").replace(/f\)/gm,")"))
}
function getRoller(name){
  return eval(eval(`regex = /new RollerItem\\(new RollerWeaponSettings\\(\\"${name}(?:[^;]*);/gm`).exec(githubText)[0].replace(/\n/gm, "").replace(/f\)/gm,")"))
}

function round(x){
  return parseFloat(x.toFixed(2))
}

function hearts(x){
  return `${'<img src="images/heart.webp">'.repeat(Math.floor(x / 2))}${round(x / 2) % 1 >= 0.5 ? '<img src="images/half_heart.webp">' : ""}`
}

class ShooterItem{
  constructor(settings){
    this.settings = settings
  }
  text(){
    return `
    The projectile size is ${this.settings.projectileSize / 2} blocks<br>
    The projectile speed is ${round(this.settings.projectileSpeed * 20)} blocks per second <br>
    The firing speed is ${round(this.settings.firingSpeed / 20)} seconds between shots or ${round(20 / this.settings.firingSpeed)} shots per second<br>
    The ground inaccuracy is ${this.settings.groundInaccuracy} <br>
    The air inaccuracy is ${this.settings.airInaccuracy} <br>
    The ink consumption is ${this.settings.inkConsumption}% per shot <br>
    The ink recovery cooldown is ${this.settings.inkRecoveryCooldown / 20} seconds <br>
    The base damage is ${this.settings.baseDamage / 2} hearts (${hearts(this.settings.baseDamage)}) <br>
    The minimum damage is ${this.settings.minDamage / 2} hearts (${hearts(this.settings.minDamage)}) <br>
    The damage decay starts ${round(this.settings.damageDecayStartTick / 20)} seconds after the projectile is fired<br>
    The damage decay rate is ${round((this.settings.damageDecayPerTick * 20) / 2)} hearts (${hearts(this.settings.damageDecayPerTick * 20)}) per second <br>
    `
  }
}

class BlasterItem{
  constructor(settings){
    this.settings = settings
  }
  text(){
    return `
    The projectile size is ${this.settings.projectileSize / 2} blocks<br>
    The projectile explodes after ${round(this.settings.projectileLifeSpan / 20)} seconds <br>
    The projectile speed is ${round(this.settings.projectileSpeed * 20)} blocks per second <br>
    The firing speed is ${round(this.settings.firingSpeed / 20)} seconds between shots or ${round(20 / this.settings.firingSpeed)} shots per second<br>
    The projectile isn't spawned until ${round(this.settings.startupTicks / 20)} seconds after the weapon is fired <br>
    The ground inaccuracy is ${this.settings.groundInaccuracy} <br>
    The air inaccuracy is ${this.settings.airInaccuracy} <br>
    The ink consumption is ${this.settings.inkConsumption}% per shot <br>
    The ink recovery cooldown is ${this.settings.inkRecoveryCooldown / 20} seconds <br>
    The base damage is ${this.settings.baseDamage / 2} hearts (${hearts(this.settings.baseDamage)}) <br>
    The minimum damage is ${this.settings.minDamage / 2} hearts (${hearts(this.settings.minDamage)}) <br>
    The damage decay starts ${round(this.settings.damageDecayStartTick / 20)} seconds after the projectile is fired<br>
    The damage decay rate is ${round((this.settings.damageDecayPerTick * 20) / 2)} hearts (${hearts(this.settings.damageDecayPerTick * 20)}) per second <br>
    `
  }
}

class WeaponSettings{
  constructor(arg){
    this.projectileSize = 1
    this.projectileLifeSpan = 5
    this.projectileSpeed = 0.75
    this.firingSpeed = 3
    this.startupTicks = 4
    this.groundInaccuracy = 6
    this.airInaccuracy = 12
    this.inkConsumption = 0.9
    this.inkRecoveryCooldown = 7
    this.baseDamage = 8
    this.minDamage = 4
    this.damageDecayStartTick = 3
    this.damageDecayPerTick = 0.34
  }

  setStartupTicks(x){
    this.startupTicks = x
    return this
  }

  setProjectileLifespan(x){
    this.projectileLifeSpan = x
    return this
  }
  
  setProjectileSize(x){
    this.projectileSize = x
    return this
  }
  setProjectileSpeed(x){
    this.projectileSpeed = x
    return this
  }
  setFiringSpeed(x){
    this.firingSpeed = x
    return this
  }
  setGroundInaccuracy(x){
    this.groundInaccuracy = x
    return this
  }
  setAirInaccuracy(x){
    this.airInaccuracy = x
    return this
  }
  setInkConsumption(x){
    this.inkConsumption = x
    return this
  }
  setInkRecoveryCooldown(x){
    this.inkRecoveryCooldown = x
    return this
  }
  setBaseDamage(x){
    this.baseDamage = x
    return this
  }
  setMinDamage(x){
    this.minDamage = x
    return this
  }
  setDamageDecayStartTick(x){
    this.damageDecayStartTick = x
    return this
  }
  setDamageDecayPerTick(x){
    this.damageDecayPerTick = x
    return this
  }
}

class RollerItem{
  constructor(settings){
    this.settings = settings
  }
  text(){
    return `
    The amount of blocks this weapon inks at once while rolling is ${this.settings.rollSize} <br>
    The amount of ink used per roll is ${this.settings.rollConsumption}% <br>
    The delay before being able to recover ink after rolling is ${round(this.settings.rollInkRecoveryCooldown / 20)} <br>
    The damage while rolling is ${round(this.settings.rollDamage / 2)} hearts (${hearts(this.settings.rollDamage)}) <br>
    The speed at which you move while rolling with this weapon is ${round(this.settings.rollMobility / 20)} blocks per second <br>
    The "dash" of the roll happens after ${round(this.settings.dashTime/20)} seconds of rolling <br>
    The "dash" speed is ${round(this.settings.dashMobility/20)} blocks per second <br>
    The "dash" ink consumption is ${this.settings.dashConsumption}% <br>
    The movement speed while performing a grounded swing is ${this.settings.swingMobility} <br>
    The ink consumption of a grounded swing is ${this.settings.swingConsumption} <br>
    The cooldown for recovering ink after a grounded swing is ${round(this.settings.swingInkRecoveryCooldown / 20)} seconds <br>
    The speed of projectiles from the grounded swing is ${round(this.settings.swingProjectileSpeed/20)} blocks per second <br>
    The time it takes to complete a grounded swing is ${round(this.settings.swingTime / 20)} seconds <br>
    The base damage of a grounded swing is ${round(this.settings.swingBaseDamage / 2)} hearts (${hearts(this.settings.swingBaseDamage)}) <br>
    The minimum damage of a grounded swing is ${round(this.settings.swingMinDamage / 2)} hearts (${hearts(this.settings.swingMinDamage)}) <br>
    The projectiles from a grounded swing start losing damage after ${round(this.settings.swingDamageDecayStartTick / 20)} seconds <br>
    The rate at which the damage decays from the projectiles is ${((this.settings.swingDamageDecayPerTick * 20) / 2)} hearts ((${hearts(this.settings.swingDamageDecayPerTick * 20)})) per second <br>
    The movement speed while performing an airborne fling is ${round(this.settings.flingMobility* 20)} blocks per second <br>
    The amount of ink consumed from an airborn fling is ${this.settings.flingConsumption}% <br>
    The cooldown for recovering ink after an airborne fling is ${round(this.settings.flingInkRecoveryCooldown / 20)} seconds <br>
    The speed of the projectiles from an airborne fling is ${round(this.settings.flingProjectileSpeed / 20)} blocks per second <br>
    The time it takes to complete an airborne fling is ${round(this.settings.flingTime / 20)} second <br>
    The base damage of an airborne fling is ${round(this.settings.flingBaseDamage / 2)} hearts (${hearts(this.settings.flingBaseDamage)}) <br>
    The minimum damage of an airborne fling is ${round(this.settings.flinMinDamage / 2)} hearts (${hearts(this.settings.flingMinDamage)}) <br>
    The projectiles from an airborne fling start losing damage after ${round(this.settings.flingDamageDecayStartTick / 20)} seconds <br>
    The rate at which projectiles from an airborn fling loses damage is ${round((this.settings.flingDamageDecayPerTick*20) / 2)} hearts (${hearts(this.settings.flingDamageDecayPerTick * 20)}) per second <br>
    `
    //HOLY SHIT ROLLERS HAVE SO MANY PROPERTIES THIS TOOK FOR FUCKING EVER!!!
  }
}

class RollerWeaponSettings{
  constructor(arg){
    this.brush = false
    this.rollSize = 3
    this.rollConsumption = 0.6
    this.rollInkRecoveryCooldown = 7
    this.rollDamage = 25
    this.rollMobility = 1.08
    this.dashMobility = 1.32
    this.dashConsumption = 0.3
    this.dashTime = 30
    this.swingMobility = 0.48
    this.swingConsumption = 9
    this.swingInkRecoveryCooldown = 15
    this.swingProjectileSpeed = 0.55
    this.swingTime = 6
    this.swingBaseDamage = 30
    this.swingMinDamage = 7
    this.swingDamageDecayStartTick = 8
    this.swingDamageDecayPerTick = 3.45
    this.flingMobility = 0.48
    this.flingConsumption = 9
    this.flingInkRecoveryCooldown = 15
    this.flingProjectileSpeed = 0.55
    this.flingTime = 6
    this.flingBaseDamage = 30
    this.flingMinDamage = 7
    this.flingDamageDecayStartTick = 8
    this.flingDamageDecayPerTick = 3.45
  }
  setBrush(x){
    this.brush = x
    return this
  }
  setRollSize(x){
    this.rollSize = x
    return this
  }
  setRollConsumption(x){
    this.rollConsumption = x
    return this
  }
  setRollInkRecoveryCooldown(x){
    this.rollInkRecoveryCooldown = x
    return this
  }
  setRollDamage(x){
    this.rollDamage = x
    return this
  }
  setRollMobility(x){
    this.rollMobility = x
    return this
  }
  setDashMobility(x){
    this.dashMobility = x
    return this
  }
  setDashConsumption(x){
    this.dashConsumption = x
    return this
  }
  setDashTime(x){
    this.dashTime = x
    return this
  }
  setSwingMobility(x){
    this.swingMobility = x
    return this
  }
  setSwingConsumption(x){
    this.swingConsumption = x
    return this
  }
  setSwingInkRecoveryCooldown(x){
    this.swingInkRecoveryCooldown = x
    return this
  }
  setSwingProjectileSpeed(x){
    this.swingProjectileSpeed = x
    return this
  }
  setSwingTime(x){
    this.swingTime = x
    return this
  }
  setSwingBaseDamage(x){
    this.swingBaseDamage = x
    return this
  }
  setSwingMinDamage(x){
    this.swingMinDamage = x
    return this
  }
  setSwingDamageDecayStartTick(x){
    this.swingDamageDecayStartTick = x
    return this
  }
  setSwingDamageDecayPerTick(x){
    this.swingDamageDecayPerTick = x
    return this
  }
  setFlingMobility(x){
    this.flingMobility = x
    return this
  }
  setFlingConsumption(x){
    this.flingConsumption = x
    return this
  }
  setFlingInkRecoveryCooldown(x){
    this.flingInkRecoveryCooldown = x
    return this
  }
  setFlingProjectileSpeed(x){
    this.flingProjectileSpeed = x
    return this
  }
  setFlingTime(x){
    this.flingTime = x
    return this
  }
  setFlingBaseDamage(x){
    this.flingBaseDamage = x
    return this
  }
  setFlingMinDamage(x){
    this.flingMinDamage = x
    return this
  }
  setFlingDamageDecayStartTick(x){
    this.flingDamageDecayStartTick = x
    return this
  }
  setFlingDamageDecayPerTick(x){
    this.flingDamageDecayPerTick = x
    return this
  }
}

// async function showData(){
//   await getWeaponData()
//   document.getElementById("weaponData").innerHTML = getShooter("splattershot").text()
// }
// showData()