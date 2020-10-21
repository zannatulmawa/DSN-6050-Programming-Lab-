//Add caraousel indicator

var i = 0;
var className = "carousel-item";
var languages = ["python", "java", "cpp"];
var images = ["python.jpg", "java.jpg", "cpp.png"];
var tutorialLinks = [
  "https://www.tutorialspoint.com/python/index.htm",
  "https://www.tutorialspoint.com/java/index.htm",
  "https://www.tutorialspoint.com/cplusplus/index.htm"
];

function addItems(){
  while(i < languages.length){
    addDiv();
    addImg();
    addCaptionDiv();
    addButton();
    i++;
  }
}


function addDiv(){
  var carouselItem = document.createElement("div");
  carouselItem.setAttribute("id", languages[i]);
  if(i == 0){
    carouselItem.setAttribute("class", className+" active");
  }else{
    carouselItem.setAttribute("class", className);
  }
  document.getElementById("carousel_inner").appendChild(carouselItem);
}

function addImg(){
  var img = document.createElement("img");
  img.setAttribute("src", "Images/" + images[i]);
  img.setAttribute("alt", languages[i]);
  img.setAttribute("width", "1100");
  img.setAttribute("height", "500");

  document.getElementById(languages[i]).appendChild(img);
}

function addCaptionDiv(){
  var captionDiv = document.createElement("div");
  captionDiv.setAttribute("id", languages[i]+"_captionDiv")
  captionDiv.setAttribute("class", "carousel-caption");

  document.getElementById(languages[i]).appendChild(captionDiv);
}

function addButton(){
  var button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "button_" + languages[i])
  button.setAttribute("class", "btn btn-primary");
  // button.setAttribute("href", tutorialLinks[i]);
  button.setAttribute("onclick", `window.open('${tutorialLinks[i]}','_blank')`);
  button.textContent = languages[i].toUpperCase();

  document.getElementById(languages[i]+"_captionDiv").appendChild(button);
}