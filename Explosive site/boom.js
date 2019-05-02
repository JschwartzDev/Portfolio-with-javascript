let leftColumn = document.getElementById("left-column");
let topRow = document.getElementById("top-row");
let mainContent = document.getElementById("main-content");
let controlPanel =document.getElementById("control-panel");
let body = document.getElementById("body");

let boomBtn = document.getElementById("boom-btn");
let unBoomBtn = document.getElementById("un-boom-btn");
let colorChangeBtn = document.getElementById("color-change-btn");
let borderColorBtn = document.getElementById("border-color-btn");
let borderStyleBtn = document.getElementById("border-style-btn");
let dancePartyBtn = document.getElementById("dance-party-btn");

let projects = document.getElementsByClassName("project-image");

//BUTTON LIST MUST COME AFTER BUTTON DECLARATIONS---DONT ASK ME WHY

let panelColors = ["#4EBFB2","#42FF55","#FF6A59","#4FB4E8","empty"];
let bodyBackgroundColors = ["#1A403B","#114015","#401A16","#6D57FF","empty"];
let btnColors = ["#63E3E6","#32BF40","#E65F50","#4F64E8","empty"];
let borderColors = ["#000","#57F3FF","#FF57ED","#6D57FF","empty"];

let borderStyles = ["solid","double", "inset", "outset","dashed","none","empty"];



let range = 4;
let multiplier = 5;
boomBtn.onclick = function(){
  leftColumn.style.setProperty("--left-column-column-start", (Math.round(Math.random() * multiplier) + range));
  leftColumn.style.setProperty("--left-column-column-finish", (Math.round(Math.random() * multiplier) + range));
  leftColumn.style.setProperty("--left-column-row-start", (Math.round(Math.random() * multiplier) + range));
  leftColumn.style.setProperty("--left-column-row-finish", (Math.round(Math.random() * multiplier) + range));
  topRow.style.setProperty("--top-row-column-start",(Math.round(Math.random() * multiplier) + range));
  topRow.style.setProperty("--top-row-column-finish",(Math.round(Math.random() * multiplier) + range));
  topRow.style.setProperty("--top-row-row-start",(Math.round(Math.random() * multiplier) + range));
  topRow.style.setProperty("--top-row-row-finish",(Math.round(Math.random() * multiplier) + range));
  mainContent.style.setProperty("--main-content-column-start",(Math.round(Math.random() * multiplier) + range));
  mainContent.style.setProperty("--main-content-column-finish", (Math.round(Math.random() * multiplier) + range));
  mainContent.style.setProperty("--main-content-row-start",(Math.round(Math.random() * multiplier) + range));
  mainContent.style.setProperty("--main-content-row-finish",(Math.round(Math.random() * multiplier) + range));
}

unBoomBtn.onclick = function(){
  leftColumn.style.setProperty("--left-column-column-start", 1);
  leftColumn.style.setProperty("--left-column-column-finish", 4);
  leftColumn.style.setProperty("--left-column-row-start", 4);
  leftColumn.style.setProperty("--left-column-row-finish", 13);
  topRow.style.setProperty("--top-row-column-start", 4);
  topRow.style.setProperty("--top-row-column-finish", 13);
  topRow.style.setProperty("--top-row-row-start", 1);
  topRow.style.setProperty("--top-row-row-finish", 4);
  mainContent.style.setProperty("--main-content-column-start", 4);
  mainContent.style.setProperty("--main-content-column-finish", 13);
  mainContent.style.setProperty("--main-content-row-start", 4);
  mainContent.style.setProperty("--main-content-row-finish", 13);
}

let mainCount = 1;
colorChangeBtn.onclick = function(){
  if(mainCount == panelColors.length - 1){
    mainCount = 0;
    leftColumn.style.backgroundColor = panelColors[mainCount];
    topRow.style.backgroundColor = panelColors[mainCount];
    controlPanel.style.backgroundColor = panelColors[mainCount];
    mainContent.style.backgroundColor = panelColors[mainCount];

    body.style.backgroundColor = bodyBackgroundColors[mainCount];
    boomBtn.style.backgroundColor = btnColors[mainCount];
    unBoomBtn.style.backgroundColor = btnColors[mainCount];
    colorChangeBtn.style.backgroundColor = btnColors[mainCount];
    borderColorBtn.style.backgroundColor = btnColors[mainCount];
    borderStyleBtn.style.backgroundColor = btnColors[mainCount];
    dancePartyBtn.style.backgroundColor = btnColors[mainCount];

    mainCount++;
  } else {
    leftColumn.style.backgroundColor = panelColors[mainCount];
    topRow.style.backgroundColor = panelColors[mainCount];
    controlPanel.style.backgroundColor = panelColors[mainCount];
    mainContent.style.backgroundColor = panelColors[mainCount];
    body.style.backgroundColor = bodyBackgroundColors[mainCount];
    boomBtn.style.backgroundColor = btnColors[mainCount];
    unBoomBtn.style.backgroundColor = btnColors[mainCount];
    colorChangeBtn.style.backgroundColor = btnColors[mainCount];
    borderColorBtn.style.backgroundColor = btnColors[mainCount];
    borderStyleBtn.style.backgroundColor = btnColors[mainCount];
    dancePartyBtn.style.backgroundColor = btnColors[mainCount];
    mainCount++;
  }
}

let borderCount = 1;
borderColorBtn.onclick = function(){
  if(borderCount == borderColors.length - 1){
    borderCount = 0;
    leftColumn.style.borderColor = borderColors[borderCount];
    topRow.style.borderColor = borderColors[borderCount];
    mainContent.style.borderColor = borderColors[borderCount];
    controlPanel.style.borderColor = borderColors[borderCount];
    borderCount++;
  } else {
    leftColumn.style.borderColor = borderColors[borderCount];
    topRow.style.borderColor = borderColors[borderCount];
    mainContent.style.borderColor = borderColors[borderCount];
    controlPanel.style.borderColor = borderColors[borderCount];

    borderCount++;
  }
}

let borderStyleCount = 1;
borderStyleBtn.onclick = function(){
  if(borderStyleCount == borderStyles.length - 1){
    borderStyleCount = 0;
    leftColumn.style.borderStyle = borderStyles[borderStyleCount];
    topRow.style.borderStyle = borderStyles[borderStyleCount];
    mainContent.style.borderStyle = borderStyles[borderStyleCount];
    controlPanel.style.borderStyle = borderStyles[borderStyleCount];
    borderStylecount++;
  } else {
    leftColumn.style.borderStyle = borderStyles[borderStyleCount];
    topRow.style.borderStyle = borderStyles[borderStyleCount];
    mainContent.style.borderStyle = borderStyles[borderStyleCount];
    controlPanel.style.borderStyle = borderStyles[borderStyleCount];
    borderStyleCount++;
  }
}

let dancePartyBoolean = false;
dancePartyBtn.onclick = function(){

  if(dancePartyBoolean == false){

    boomBtn.style.animationName = "danceParty";
    unBoomBtn.style.animationName = "danceParty";
    dancePartyBtn.style.animationName = "danceParty";
    colorChangeBtn.style.animationName = "danceParty";
    borderColorBtn.style.animationName = "danceParty";
    borderStyleBtn.style.animationName = "danceParty";
    leftColumn.style.animationName = "danceParty";
    topRow.style.animationName = "danceParty";
    controlPanel.style.animationName = "danceParty";
    mainContent.style.animationName = "danceParty";
    dancePartyBoolean = true;
  } else if(dancePartyBoolean == true){

    boomBtn.style.animationName = "";
    unBoomBtn.style.animationName = "";
    dancePartyBtn.style.animationName = "";
    colorChangeBtn.style.animationName = "";
    borderColorBtn.style.animationName = "";
    borderStyleBtn.style.animationName = "";
    leftColumn.style.animationName = "";
    topRow.style.animationName = "";
    controlPanel.style.animationName = "";
    mainContent.style.animationName = "";
    dancePartyBoolean = false;
  }


}
