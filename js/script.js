var initHidden = false;

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