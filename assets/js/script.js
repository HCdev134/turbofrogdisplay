// var counter = 0; 


// function handleCounter(){
//    var countNum =  document.getElementById("count-number");
//    counter++; 

// }
var ovrCounter = 0;
console.log("hello!"); 


function navToggle() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function qMobileNav(){
    var y = $("#navbar"); 
    if(y.className === "topnav"){
      y.classname += "responsive";
    }
    else{
      y.classname = "topnav"; 
    }
  }
function handleGreeting() {
    var welcome = "Hello and Welcome to My Website..."
    document.getElementById("greeter").innerText = `( : ${welcome}`; 
    console.log("greeting function worked!!"); 
}


// var imgFx = $("<img></img>"); 
// console.log(imgFx); 

// // select child elements using chaining and attributes 

// var parentOfImg = $("#images"); 
// console.dir(parentOfImg);

// var randomObj = {
//     name: {
//         firstName: "User first name",
//         lastName: "User last name"
//     }
// }

