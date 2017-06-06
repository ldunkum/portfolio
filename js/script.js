var initHidden = false;

window.onload = function(){
    var textWrapper = document.getElementById("show-picture-text");    
    var showPictureText = "If you're curious to see what I look like, click <span id='image-loader'>here</span>.";
    textWrapper.innerHTML = showPictureText;
    clickListener();
    randomizeBackground();
};

var clickListener = function() { 
    document.getElementById("image-loader").addEventListener("click", function(){
        var picture = document.getElementById('picture');
        if(!initHidden){
            picture.style.visibility = 'hidden';
            initHidden = true;
        }
        if (picture.style.visibility === 'hidden') {
            picture.style.visibility = 'visible';
        } else {
            picture.style.visibility = 'hidden';
        }
    });
};

/**
 * switches background and text color 
 */
var randomizeBackground = function() {
    var changeBgToBlack = Math.random() >= 0.5;
    if (changeBgToBlack){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
};