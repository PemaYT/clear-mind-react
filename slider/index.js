var dragValue;

function move(id) {
    var element = document.getElementById("button");
    element.onmousedown = function(){
        dragValue = element;

        console.log("dragValue: ", dragValue);
    }
}

document.onmouseup= function(e){
    dragValue = null;
}           

document.onmousemove = function(e){
    var y = e.pageY;

    console.log("e.pageY: ", e.pageY);

    dragValue.style.top = y + "px";

}


