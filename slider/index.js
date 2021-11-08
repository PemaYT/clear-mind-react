var dragValue;
var sliderButton = document.getElementById("button");
var maxNumParagraph = document.getElementById("maxNum");

// const maxNum = document.getElementById("maxNum").innerHTML;
// const minNum = document.getElementById("minNum").innerHTML;

function move(id) {
  var element = document.getElementById("button");
  element.onmousedown = function(){
    dragValue = element;
    // console.log("dragValue: ", dragValue);
  }
}

document.onmouseup= function(e){
  dragValue = null;
}           

document.onmousemove = function(e){
  var y = e.pageY;
  // console.log("e.pageY: ", e.pageY);
  dragValue.style.top = y + "px";   
}

function applySliderConfigs({ color, size, scale, defaultPosition }) {
  if (color !== undefined) {
    btn.style.backgroundColor = color;
  }
  if (size !== undefined) {
    btn.style.height = size;
  }
  if (scale !== undefined) {
    btn.innerHTML = scale;
  }
  if (defaultPosition !== undefined) {
    btn.style.top = defaultPosition;
  }
}

// applySliderConfigs({ color: "green", size: "150px", scale: 0 });

function applyButtonColor(color){
  console.log((document.getElementById("button")));
  document.getElementById("button").style.backgroundColor = "yellow";
}

applyButtonColor();

// practice:
// function buttonBackgroundColor(){
//   console.log("green");
// }

// buttonBackgroundColor();


// function applySliderConfigs(color, size, range, defaultPosition) {
//     document.getElementById("mySliderIcon").style.backgroundColor = color;
//     //set size
//     //set slider range
//     //set default slider position

//     function applySliderConfigs(color, size, scale, defaultPosition) {
//         document.getElementById("mySliderIcon").style.backgroundColor = color;
//       }
//       applySliderConfigs("coral");
//       function writeSliderRange(array) {
//         //user passes in values
//         //iterate through the values
//         //store range in a variable
//         //loop through array
//         //create a div for each value of the array
//         //append those divs to the DOM inside the container
//       } 
