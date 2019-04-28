/*
    start game
    show new item
    drag/click item to recycle/trash

*/


var refuseObjs = [
	{
        "dataid": "meow",
		"name":  "cans",
    	"type":  "recycle", // 2
        "image": "assets/img/cans.png",
        "draggable": "true",
        "ondrop": "drop(event)",
        "ondragover": "allowDrop(event)",
        "ondragstart":"drG(event)"
        
        
	},
	{
        "dataid": "meow2",
		"name":  "paper",
    	"type":  "recycle",
        "image": "assets/img/paper.jpg",
        "ondrop": "drop(event)",
        "ondragover": "allowDrop(event)",
        "ondragstart":"drG(event)"
    },
	{
        "dataid": "meow2",
		"name":  "straws",
    	"type":  "recycle",
        "image": "assets/img/straws.jpg",
        "ondrop": "drop(event)",
        "ondragover": "allowDrop(event)",
        "ondragstart":"drG(event)"
	
	}
];
var refuseObjs2 = {
        "meow": {
            "dataid": "meow",
            "name":  "cans",
            "type":  "recycle", // 2
            "image": "assets/img/cans.png"
        },
        "meow2": {
            "dataid": "meow2",
            "name":  "paper",
            "type":  "recycle",
            "image": "assets/img/paper.jpg"
        }
    },
    score = 0;


$(document).ready(function(){
    //alert("hi mom!");
});
var a = 0;
var newRefuse = refuseObjs[0]; 



$("button#newRefuse").on("click", function(evtEL){
    //alert("hi dad");
       //refuseObj[Math.random( 0, refuseObjs.length )];
    //var newRefuse2 = refuseObjs.meow2;   //["meow"];    //refuseObj[Math.random( 0, Object.keys(refuseObjs).length )];
    $(".containerItem").attr( "src", newRefuse.image);
    $(".containerItem").data( "key", newRefuse.dataid);
    newRefuse = refuseObjs[1];
    
  
});

$("button#newrecycle").on("click", function(evtEL){
    //alert("hi dad");
       //refuseObj[Math.random( 0, refuseObjs.length )];
    //var newRefuse2 = refuseObjs.meow2;   //["meow"];    //refuseObj[Math.random( 0, Object.keys(refuseObjs).length )];
    $(".containerItem").attr( "src", newRefuse.image);
    $(".containerItem").data( "key", newRefuse.dataid);
    if( refuseObjs[ $(".containerItem").data( "key")]["type"]=="recycle" ) {
        score++;
     } else {
        score--;
    }
    alert("the score is now:"+score);
});


$("button#newtrash").on("click", function(evtEL){
    //alert("hi dad");
       //refuseObj[Math.random( 0, refuseObjs.length )];
    //var newRefuse2 = refuseObjs.meow2;   //["meow"];    //refuseObj[Math.random( 0, Object.keys(refuseObjs).length )];
    $(".containerItem").attr( "src", newRefuse.image);
    $(".containerItem").data( "key", newRefuse.dataid);
    if( refuseObjs[ $(".containerItem").data( "key")]["type"]=="trash" ) {
        score++;
     } else {
        score--;
    }
    alert("the score is now:"+score);
});


// original code
/*
var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "https://5.imimg.com/data5/RJ/XJ/MY-14679786/food-tin-can-500x500.png", 10, 120, "image");
  
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
                 
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
             if(myGamePiece.x < 20)
{
	myGamePiece.X =0; 
}
   if(myGamePiece.x > 400)
{
	myGamePiece.X =400; 
}
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
}

function updateGameArea()
 {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
 
}


function moveleft() {
	
    myGamePiece.x = 0;
}

function moveright() {

	 myGamePiece.x = 420;
    
}


function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}


function stopMove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}
*/