

function changeLogo(){
    try {
        // Remove previous logo
        var logo = document.getElementById("logo");
        logo.parentNode.removeChild(logo);

        // Remove previous favicon
        var favicon = document.getElementById("favicon");
        favicon.parentNode.removeChild(favicon);
        
    } catch (error) {
        //do nothing
    } finally {

        var val = document.getElementById("select-logo").value;
        
        // Create logo node
        var image = document.createElement('img');
        image.src = "./images/logo" + val + ".png";
        image.id = "logo";
        
        if(val == "6"){
           image.style.position = "relative";
           image.style.top = "-10px";
           image.style.left = "15px"; 
           image.style.height = "auto";
           image.style.width = "70px";
        }

        document.getElementById("navigation-container").prepend(image);

        // Create favicon node
        var favicon = document.createElement("link");
        favicon.id = "favicon";
        favicon.rel = "shortcut icon";
        favicon.type = "image/jpg";
        favicon.href = "./images/logo" + val + ".png";
        
        document.getElementsByTagName("head")[0].prepend(favicon);
    } 
}



function changeFont(){

    var fonts = [
        // Sans Serif
        "Lato, sans-serif",
        "Josefin Sans, sans-serif",
        "Jura, sans-serif",
        "Kodchasan, sans-serif",
        "NTR, sans-serif",
        "Orbitron, sans-serif",
        "Paytone One, sans-serif",
        "Raleway, sans-serif",
        "Recursive, sans-serif",
        "Reem Kufi, sans-serif",
        "Spartan, sans-serif",
        "Varela Round, sans-serif",
        // Cursive (display)
        "Audiowide, cursive",
        "Comfortaa, cursive",
        "Fredoka One, cursive",
        "Fugaz One, cursive",
        "Lobster, cursive",
        "Seaweed Script, cursive",
        "Staatliches, cursive",
        // Handwriting
        "Grand Hotel, cursive",
        "Kavivanar, cursive",
        "Nerko One, cursive",
        "Sofia, cursive"
    ]

    var val = document.getElementById("select-font").value;
    document.getElementById("pingr").style.fontFamily = fonts[val];
}

function flipImage(){
    var logo = document.getElementById("logo");
    if(logo.style.transform == "rotateY(180deg)"){
        logo.style.transform = "rotateY(0deg)"
    } else {
        logo.style.transform = "rotateY(180deg)";
    }
}


function italicize(){
    var pingr = document.getElementById("pingr");
    var style = pingr.style.fontStyle;

    if(style == "" | style == "normal"){
        pingr.style.fontStyle = "italic";
    } else {
        pingr.style.fontStyle = "normal";
    }
}

function bold(){
    var pingr = document.getElementById("pingr");
    var weight = pingr.style.fontWeight;

    if(weight == "" | weight == "normal"){
        pingr.style.fontWeight = "bold";
    } else {
        pingr.style.fontWeight = "normal";
    }
}

function capitalize(){
    var pingr = document.getElementById("pingr");
    var style = pingr.style.textTransform;

    if(style == "" | style == "none") {
        pingr.style.textTransform = "uppercase";
    } else if(style == "uppercase"){
        pingr.style.textTransform = "lowercase";
    } else {
        pingr.style.textTransform = "none";
    }

}


window.onload = changeLogo();
window.onload = changeFont();