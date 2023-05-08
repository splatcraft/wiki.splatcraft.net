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

function round(x){
  return parseFloat(x.toFixed(2))
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
    The base damage is ${this.settings.baseDamage / 2} hearts (${'<img src="images/heart.webp">'.repeat(Math.floor(this.settings.baseDamage / 2))}${this.settings.baseDamage % 2 == 1 ? '<img src="images/half_heart.webp">' : ""}) <br>
    The minimum damage is ${this.settings.minDamage / 2} hearts (${'<img src="images/heart.webp">'.repeat(Math.floor(this.settings.minDamage / 2))}${this.settings.minDamage % 2 == 1 ? '<img src="images/half_heart.webp">' : ""}) <br>
    The damage decay starts ${round(this.settings.damageDecayStartTick / 20)} seconds after the projectile is fired<br>
    The damage decay rate is ${round((this.settings.damageDecayPerTick * 20) / 2)} hearts (${'<img src="images/heart.webp">'.repeat(Math.floor((this.settings.damageDecayPerTick * 20) / 2))}${round((this.settings.damageDecayPerTick * 20) / 2) % 1 >= 0.5 ? '<img src="images/half_heart.webp">' : ""}) per second <br>
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
    The projectile isn't spawned until after ${round(this.startupTicks / 20)} seconds
    The ground inaccuracy is ${this.settings.groundInaccuracy} <br>
    The air inaccuracy is ${this.settings.airInaccuracy} <br>
    The ink consumption is ${this.settings.inkConsumption}% per shot <br>
    The ink recovery cooldown is ${this.settings.inkRecoveryCooldown / 20} seconds <br>
    The base damage is ${this.settings.baseDamage / 2} hearts (${'<img src="images/heart.webp">'.repeat(Math.floor(this.settings.baseDamage / 2))}${this.settings.baseDamage % 2 == 1 ? '<img src="images/half_heart.webp">' : ""}) <br>
    The minimum damage is ${this.settings.minDamage / 2} hearts (${'<img src="images/heart.webp">'.repeat(Math.floor(this.settings.minDamage / 2))}${this.settings.minDamage % 2 == 1 ? '<img src="images/half_heart.webp">' : ""}) <br>
    The damage decay starts ${round(this.settings.damageDecayStartTick / 20)} seconds after the projectile is fired<br>
    The damage decay rate is ${round((this.settings.damageDecayPerTick * 20) / 2)} hearts (${'<img src="images/heart.webp">'.repeat(Math.floor((this.settings.damageDecayPerTick * 20) / 2))}${round((this.settings.damageDecayPerTick * 20) / 2) % 1 >= 0.5 ? '<img src="images/half_heart.webp">' : ""}) per second <br>
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

// async function showData(){
//   await getWeaponData()
//   document.getElementById("weaponData").innerHTML = getShooter("splattershot").text()
// }
// showData()