head = document.getElementsByTagName("head")[0]
body = document.getElementsByTagName("body")[0]
html = document.getElementsByTagName("html")[0]

function createMeta(){
    document.innerHTML = `<!DOCTYPE html>
    <meta charset="UTF-8">
    <meta lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Splatcraft, Splatcraft wiki"> ${document.innerHTML}`
}
function createHead(pageName){
    head.innerHTML = `<title>Splatcraft Wiki | ${pageName}</title>
    <link rel="icon" type="image/x-icon" href="images/splatcraft-icon.ico">
    <link rel="stylesheet" href="css files/main.css">
    <link rel="stylesheet" href="css files/extendedMain.css">`
}
function createBody(){
    body.innerHTML = `
    <div id="sticky-div">
    <div id="header-pos">

    </div>

    <a href="index.html">
      <img src="images/splatcraftlogobig.png" width="210">
    </a>

    <div class="container-search">
      <form action="/action_page.php">
        <input type="text" placeholder="Search..." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>

    </div>
    <div class="background">
    <div style="position:sticky; top: 37%;">
      <div style="float:left; position:fixed; left:4%; top:11%;">
        <div class="splatlogo">
          <img src="images/logo-square.png" style="width:200px">
        </div>

      </div>
      <div id="sidebar">
        <table>
          <tr>
            <th>
              <div style="    font-weight: normal;
              font-size: 1.4em;   padding-left:20%;">
                Navigation
                <hr id="hr-blue">
              </div>
            </th>
        </table>
        <table style="margin-top:4%">
          <tr>
            <th class="no-decor">
              <a href="index.html">
                Main page
              </a>
            </th>
          </tr>
          <tr>
            <th class="no-decor">
              <a href="developers.html">
                Mod devs
              </a>
            </th>
          </tr>
          <tr>
            <th class="no-decor">
              <a href="policy.html">
                Policy
              </a>
            </th>
          </tr>
          <tr>
            <th class="no-decor" >
              <a href="help.html">
                Help
              </a>
            </th>
          </tr>
        </table>
        <p style="margin:12%">
        </p>
        <table>
          <tr>
            <th>
              <div style="    font-weight: normal;
              font-size: 1.4em;   padding-left:20%;">
                Explore
                <hr id="hr-orange">
              </div>
            </th>
        </table>
        <table>
          <tr>
            <th class="no-decor">
              Weapons
            </th>
          </tr>
          <tr>
            <th class="no-decor">
              Blocks
            </th>
          </tr>
          <tr>
            <th class="no-decor">
              Entities
            </th>
          </tr>
          <tr>
            <th class="no-decor">
              Blocks
            </th>
          </tr>
        </table>
        <p style="margin:12%">
        </p>
      </div>
    </div>
    
    <div class="wiki-overlay">
    ${body.innerHTML}
    </div>
    </div>
    <footer></footer>`
}

function createStyle(){
    document.innerHTML = `<style>
    .container-search {
      width: 150%;
      height: 20%;
      size: 150%;
      padding-left: 20%;
      background-image: linear-gradient(rgba(0, 8, 51, 0.9));
      background-position: center;
      background-size: cover;
    }
  
    .container-search input {
      width: 70%;
      height: 30%;
    }
  
    #sticky-div {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      font-size: 30px;
      color: rgb(0, 0, 0);
      background-color: white;
      z-index: 100;
      height: 75px;
      text-orientation: inherit;
      padding-top: 15px;
      padding-right: 2%;
      padding-left: 2%;
      border-bottom: solid #aadc00 5px;
      box-shadow: 0 1px 16px rgba(0, 0, 0, 0.5);
      justify-content: space-between;
      flex-direction: row;
      display: flex;
    }
  
    #splatlogo::after {
      border-radius: 20%;
    }
  
    #hr-blue {
      border: none;
  
      &:before {
        content: "";
        display: block;
        position: absolute;
        right: 5px;
        max-width: 100%;
        width: 80%;
        border: 1px solid #26229F;
        left: 7%;
      }
    }
  
    .no-decor {
      text-decoration: none;
      font-weight: normal;
      left: 0;
      text-align: left;
      padding-left: 10%;
      width: 100%;
      padding-right: 10%;
    }
    #hr-orange {
      border: none;
  
      &:before {
        content: "";
        display: block;
        position: absolute;
        right: 5px;
        max-width: 100%;
        width: 80%;
        border: 1px solid #fb5c03;
        left: 7%;
      }
    }
  
    .no-decor {
      text-decoration: none;
      font-weight: normal;
      left: 0;
      text-align: left;
      padding-left: 10%;
      width: 100%;
      padding-right: 10%;
      line-height: 150%;
    }
  </style>
  ${html.innerHTML}`
}

// data format: [{type:"something", extraData: thing}]
// types:
// text: {type:"text", content:"stuff"}
// title: {type:"title", content:"stuff"}
// image: {type:"image", source:"url", title:"text"}
// info: {type:"info",table:[]}
// subtitle: {type:"subtitle", content:"stuff"}

// info table types:
// text: {type:"text",title:"class",content:"shooter"}
// bar: {type:"bar",title:"range",max:"100",value:"50"}
// title: {type:"title",content:"text here"}
// craft: {type:"craft",content:[[sourceImage, count],[sourceImage, count], etc]}
function createWeaponBlock(data){
    openingTag = `<div style="border-width: 10px 1px; border-style: solid; border-color: rgb(170, 220, 0); border-radius: 10px; margin: 4px; background-color: rgba(170, 220, 0, 0.25); width: 350px; padding: 8px; float: right; text-align: center;">`
    closingTag = `</div>`
    innerHTML = ""
    for (obj of data){
        switch (obj.type){
            case "text":
                innerHTML += `<div style="text-align:center; float:initial; margin-bottom:15px;">${obj.content}</div>`
                break
            case "title":
                innerHTML += `<div style="padding: 10px; background: rgba(170, 220, 0, 0.3); border-width: 1px 5px 1px 5px; border-style: solid; border-color: rgba(170, 220, 0, 0.5); border-radius: 5px 5px 5px 5px; text-align: center; font-size: 20px;"><b>${obj.content}</b></div>`
                break
            case "subtitle":
                innerHTML += `<div style="background-color: rgba(170, 220, 0, 0.5); text-align: center;" colspan="2">${obj.content}</div>`
                break
            case "image":
                innerHTML += `<p><img src="${obj.source}" width="256" title="${obj.title}"></p>`
                break
            case "info":
                tableStart = `<table style="table-layout:fixed;border-spacing: 4px; text-align: left; width: 100%;"><tbody>`
                tableEnd = `</tbody></table>`
                tableContent = ``
                for (entry of obj.table){
                    tableContent += `<tr>`
                    switch (entry.type){
                        case "text":
                            tableContent += `<td style="padding: 5px; background: linear-gradient(to right, rgba(170, 220, 0, 0.3) 0%, rgba(170, 220, 0, 0) 100%); border-width: 1px 0px 1px 5px; border-style: solid; border-color: rgba(170, 220, 0, 0.5); border-radius: 5px 0px 0px 5px;"><b>${entry.title}</b></td><td>${entry.content}</td>`
                            break
                        case "bar":
                            tableContent += `<td style="width:50%;padding: 5px; background: linear-gradient(to right, rgba(170, 220, 0, 0.3) 0%, rgba(170, 220, 0, 0) 100%); border-width: 1px 0px 1px 5px; border-style: solid; border-color: rgba(170, 220, 0, 0.5); border-radius: 5px 0px 0px 5px;"><b>${entry.title}</b></td><td style="line-height: 100%;"><div style="display: inline-block; width: 100%; height: 20px; border: 1px solid rgba(235, 238, 61, 0.5); background-color: #cccccc; border-radius: 5px; overflow: hidden; position: relative;"><div style="display: table-cell; width: ${Math.min((entry.value/entry.max)*100,100)}%; height: 100%; background-color: rgb(170, 220, 0); background-repeat: repeat-x; position: absolute;"><div class="infoboxmeter20" style="position: absolute; width: 100%; height: 100%; opacity: 0.25;"></div></div><div style="position: absolute; width: 100%; height: 100%; text-align: center; line-height: 20px; color: #202122;"><b>${entry.value} / ${entry.max}</b></div></div></td>`
                            break
                        case "title":
                            tableContent += `<th style="background-color: rgba(170, 220, 0, 0.5); text-align: center;" colspan="2">${entry.content}</th>`
                            break
                        case "crafting":
                            tableContent += `<th colspan="2" style="justify-content:space-between; padding-left:8%">`
                            for (item of entry.content){
                                tableContent += `<img src="${item[0]}" width="75px">x${item[1]}`
                            }
                            tableContent += `</th>`
                    }
                    tableContent += `</tr>`
                }
                innerHTML += tableStart + tableContent + tableEnd
                break
        }
    }
    return openingTag + innerHTML + closingTag
}

//example:
// createWeaponBlock(
// [
//     {type:"title", content:"Splattershot Jr"},
//     {type:"image", source:"images/weapons/splattershot_jr.png", title:"splattershot_jr"},
//     {type:"text", content:"The current model for the Splattershot Jr"},
//     {type:"info", table:[
//         {type:"title",content:"Basic Information"},
//         {type:"text",title:"Type of Weapon", content:"Main"},
//         {type:"text",title:"class",content:"Shooter"},
//         {type:"bar",title:"Range",max:100,value:45},
//         {type:"bar",title:"Damage",max:100,value:32},
//         {type:"bar",title:"Fire rate",max:100,value:80},
//         {type:"title",content:"Crafting"},
//         {type:"crafting", content:[
//             ["images/crafting/sardinium.png",4],
//             ["images/crafting/power_egg.png",8],
//             ["images/crafting/inc_sac.webp",4],
//             ["images/crafting/glass.webp",4]
//         ]},
//         {type:"title",content:"Specifications"},
//         {type:"text",title:"Base Damage",content:"6.5"},
//         {type:"text",title:"Ink Consumption",content:"0.5"}
//     ]}
// ]
// )