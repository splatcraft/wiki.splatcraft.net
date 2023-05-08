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

class ShooterItem{
  constructor(settings){
    this.settings = settings
  }
  text(){
    return `
    The projectile size is ${this.settings.projectileSize / 2} blocks<br>
    The projectile speed is ${parseFloat((this.settings.projectileSpeed / 20).toFixed(2))} blocks per second <br>
    The firing speed is ${parseFloat((this.settings.firingSpeed / 20).toFixed(2))} seconds between shots or ${parseFloat((20 / this.settings.firingSpeed).toFixed(2))} shots per second<br>
    The ground inaccuracy is ${this.settings.groundInaccuracy} <br>
    The air inaccuracy is ${this.settings.airInaccuracy} <br>
    The ink consumption is ${this.settings.inkConsumption}% per shot <br>
    The ink recovery cooldown is ${this.settings.inkRecoveryCooldown / 20} seconds <br>
    The base damage is ${this.settings.baseDamage / 2} hearts (${'<img src="images/heart.webp">'.repeat(Math.floor(this.settings.baseDamage / 2))}${this.settings.baseDamage % 2 == 1 ? '<img src="images/half_heart.webp">' : ""}) <br>
    The minimum damage is ${this.settings.minDamage / 2} hearts (${'<img src="images/heart.webp">'.repeat(Math.floor(this.settings.minDamage / 2))}${this.settings.minDamage % 2 == 1 ? '<img src="images/half_heart.webp">' : ""}) <br>
    The damage decay starts ${parseFloat((this.settings.damageDecayStartTick / 20).toFixed(2))} seconds after the projectile is fired<br>
    The damage decay rate is ${parseFloat(((this.settings.damageDecayPerTick * 20) / 2).toFixed(2))} hearts (${'<img src="images/heart.webp">'.repeat(Math.floor((this.settings.damageDecayPerTick * 20) / 2))}${parseFloat(((this.settings.damageDecayPerTick * 20) / 2).toFixed(2)) % 1 != 0 ? '<img src="images/half_heart.webp">' : ""}) per second <br>
    `
  }
}

class WeaponSettings{
  constructor(arg){
    this.projectileSize = 1
    this.projectileSpeed = 0.75
    this.firingSpeed = 3
    this.groundInaccuracy = 6
    this.airInaccuracy = 12
    this.inkConsumption = 0.9
    this.inkRecoveryCooldown = 7
    this.baseDamage = 8
    this.minDamage = 4
    this.damageDecayStartTick = 3
    this.damageDecayPerTick = 0.34
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