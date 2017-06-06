document.getElementById("image-loader").addEventListener("click", function(){
    var picture = document.getElementById('picture');
    if (picture.style.visibility === 'hidden') {
        picture.style.visibility = 'visible';
    } else {
        picture.style.visibility = 'hidden';
    }
});