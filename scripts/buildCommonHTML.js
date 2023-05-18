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