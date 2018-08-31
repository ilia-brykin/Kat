function createImage()
{
    var canvas = document.getElementById("lesson6");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(100,0,0)";
    ctx.fillRect(10, 10, 50, 70);
}
function createImage()
{
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    ctx.strokeRect(10, 10, 130, 130);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(30, 30, 90, 90);
    ctx.clearRect(50, 50, 50, 50);
}
function createImage()
{
    var canvas = document.getElementById("canvas2");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(100,0,0)";
    ctx.fillRect(10, 10, 100, 30);
    ctx.fillStyle = "rgb(0,100,0)";
    ctx.fillRect(20, 20, 100, 30);
    ctx.fillStyle = "rgb(0,0,100)";
    ctx.fillRect(30, 30, 100, 30);
}
function createImage()
{
    var canvas = document.getElementById("canvas3");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(0,100,0)";
    ctx.fillRect(10, 10, 30, 60);
    ctx.fillStyle = "rgb(0,0,100)";
    ctx.fillRect(10, 50, 30, 90);
    ctx.fillStyle = "rgb(0,100,0)";
    ctx.fillRect(50, 30, 30, 30);
    ctx.fillStyle = "rgb(0,0,100)";
    ctx.fillRect(50, 60, 30, 80);
    ctx.fillStyle = "rgb(0,100,0)";
    ctx.fillRect(90, 20, 30, 30);
    ctx.fillStyle = "rgb(0,0,100)";
    ctx.fillRect(90, 40, 30, 100);
}