var dragValue;
var sliderButton = document.getElementById("button");
// var maxNumParagraph = document.getElementById("maxNum");

function move(id) {
  var element = sliderButton;
  element.onmousedown = function() {
    dragValue = element;
    // console.log("dragValue: ", dragValue);
  }
}

document.onmouseup= function(e) {
  dragValue = null;
}           

document.onmousemove = function(e) {
  var y = e.pageY;
  // console.log("y: ", y);
  dragValue.style.top = y + "px";  
  if (y <= 0) {
    // if (y >= 484){
    dragValue = null;
    // }
  }
}



  //how the order of the code matters - buttons goes up more than 100
  //why a second click is needed (it shouldn't release the button)

  //restrict sliderButton in between maxNum and minNum
  //prevent slider from going too up
  //create a hard border
  //make a function that tells the button not to pass the hard border
  //
  //prevent slider from going too down

function applySliderConfigs({ color, size, scale, defaultPosition }) {
  if (color !== undefined) {
    sliderButton.style.backgroundColor = color;
  }
  if (size !== undefined) {
    sliderButton.style.height = size;
  }
  if (scale !== undefined) {
    sliderButton.innerHTML = scale;
  }
  if (defaultPosition !== undefined) {
    sliderButton.style.top = defaultPosition;
  }
}

applySliderConfigs({ color: "pink", size: "100px", scale: none });

// function applyButtonColor(color){
//   sliderButton.style.backgroundColor = "pink";
// }

// applyButtonColor();

function changeColor(){
  let color = document.querySelector("#colorInputText").value;
  sliderButton.style.backgroundColor = color;
}
