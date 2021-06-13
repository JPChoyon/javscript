var photo = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var imgTag = document.getElementById("img");

var count = 0;

function next()
{
    count++;
    if(count >= photo.length) {
       count = 0;
        imgTag.src = photo[count];
       }
    else {
    imgTag.src = photo[count];
    }
}

function prev()
{
       count--;
    if(count < 0) {
       count = photo.length - 1;
        imgTag.src = photo[count];
       }
    else {
    imgTag.src = photo[count];
    }
}