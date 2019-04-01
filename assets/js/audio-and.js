/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navTog() {

    // togClass is set as a variable for placeholder(control flow if:else, "to toggle classes")
    var togClass = document.getElementById("navbar");
    if (togClass.className === "topnav") {
      togClass.className += " responsive";
    } else {
      togClass.className = "topnav";
    }
  }
//   this code is simple enough for just the one style change to green bg color on dropdown menu
//   try and change simple style of caret on click and see if font awesome classes are target-able in general 

// removed commented out code,, ReFactor : One 
document.getElementById("nav-tog").onmouseover = function chgLogoColor(event){
    // event.preventDefault(); 
    console.log(event); 
    var caretLogo = document.getElementById("nav-tog"); 
    console.log(caretLogo); 
    // changes background color of caretLogo variable to a more blue / color scheme friendly color
    caretLogo.style.backgroundColor = "rgba(10, 20, 120, 1)";
    caretLogo.style.color = "#000";
    caretLogo.style.fontWeight = "bolder";  
    console.log("test:  this should change color by id selection process of i font awesome element");
    console.log("function worked after multiple clicks");
    
}
document.getElementById("nav-tog").onmouseleave = function revertLogoColor(event){
    
    var logo = document.getElementById("nav-tog"); //#endregioncons
    console.log(logo); 
    logo.style.backgroundColor = "rgba(16, 98, 230, 0.7);"
    console.log(`test : ${logo} \n , test: ${event}`);
    console.log("color changed on hover, mouse leave event worked"); 
  
}
// document.getElementById("nav-tog").onclick = function chgLogo(event){
//     event.preventDefault(); 
//     chgLogoColor()
//     revertLogoColor(); 
// }

 