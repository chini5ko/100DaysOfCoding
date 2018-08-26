// Modal Image Gallery
function onClick(element) {
  document.getElementyId("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Tabs for time descritpion 
function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-border-blue", "");
    }
    document.getElementById(cityName).style.display = "block";
    console.log(cityName);
    var borderColor = "w3-border-";
    //if()
    evt.currentTarget.firstElementChild.className += " w3-border-blue";
  }

  //wechat contact 
  var idIsShown = false;
function showWechat(){

    if(idIsShown == false){
        document.getElementById("showWechat").innerHTML = "Chinisko";
        document.getElementById("showWechatQRCode").src = "wechatQRb.png";
        document.getElementById("showWechatQRCode").style = "width:300px; height:300px";
        
        document.getElementById("wechatIcon").className = "";
        document.getElementById("context").innerHTML = "";

        idIsShown =true;
    }
    else{
        document.getElementById("showWechatQRCode").style.visibility = "hidden";
        document.getElementById("showWechat").innerHTML = "";
        document.getElementById("wechatIcon").className ="fa fa-wechat";
        document.getElementById("context").innerHTML = "CONTACT";
        idIsShown= false;
    }
   
}

//document.getElementById("npmBar").className += "w3-rightbar";


 
//small devices
if ( $(window).width() > 900) {      
    //Add your javascript for large screens here 
   
} 
  else {
    //Add your javascript for small screens here 
    document.getElementById("redBar").className += "w3-rightbar";
    document.getElementById("redBar1").className += "w3-rightbar";
    document.getElementById("redBar2").className += "w3-rightbar";
    document.getElementById("redBar3").className += "w3-rightbar";
    document.getElementById("blueBar").className += "w3-leftbar";
    document.getElementById("blueBar1").className += "w3-leftbar";
    document.getElementById("blueBar2").className += "w3-leftbar";
    document.getElementById("blueBar3").className += "w3-leftbar";
  }

  //small top
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" w3-light-grey", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-light-grey";
  }