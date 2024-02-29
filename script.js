
var IMAGE_URL = [
    "https://via.placeholder.com/1920x1080/663399",
    "https://via.placeholder.com/1920x1080/FF6347",
    "https://via.placeholder.com/1920x1080/00FF00",
    "https://via.placeholder.com/1920x1080/0000FF",
    "https://via.placeholder.com/1920x1080/FFD700"
]

var imageIndex = 0;
var interval = 5000;

function changeImage() {
    var image = document.getElementById("image");
    image.src = IMAGE_URL[imageIndex];
    imageIndex = (imageIndex + 1) % IMAGE_URL.length;
}

function start() {
    changeImage();
    setInterval(changeImage, interval);
}

start();