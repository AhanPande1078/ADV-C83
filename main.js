var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var width = 3;
var mouseEvent = "empty";
var Last_position_of_x, Last_position_of_y; 

new_width = screen.width - 70;
new_height = screen.height - 300;
if (screen.width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

 canvas.addEventListener("touchstart", my_touchStart);

function my_touchStart(e) {
    console.log("my_touchStart");
    color = document.getElementById("color").value;
    width= document.getElementById("Width").value;
    Last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    Last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchMove);
function my_touchMove(e) {
    console.log("my_touchMove");
    current_position_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(Last_position_of_x,Last_position_of_y);
    console.log("x = " + Last_position_of_x + " y = "  + Last_position_of_y);
    ctx.lineTo(current_position_of_touch_X,current_position_of_touch_Y);
    ctx.stroke();
    Last_position_of_x = current_position_of_touch_X;
    Last_position_of_Y = current_position_of_touch_Y;
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width= document.getElementById("Width").value;
    mouseEvent= "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_X = e.clientX- canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY- canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = width;
        console.log("Last_position_of_X and Y ");
        console.log("x = " + Last_position_of_x + " y = " + Last_position_of_y);
        ctx.moveTo(Last_position_of_x,Last_position_of_y);
        console.log("Current_position_of_X and Y ");
        console.log("x = " + current_position_of_mouse_X + " y = " + current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
        ctx.stroke();
    }
    Last_position_of_x = current_position_of_mouse_X;
    Last_position_of_y = current_position_of_mouse_Y;
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent= "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
mouseEvent= "mouseLeave";
}
function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}