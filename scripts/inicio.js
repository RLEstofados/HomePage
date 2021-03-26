let images  = [
    "image/cadeira8.jpg",
    "image/almofada.jpg",
    "image/cadeira2.jpg",
    "image/home8.jpg",
    "image/home7.jpg",
    "image/home3.jpg",
    "image/cadeira9.jpg"
], 
indexImage = 0;

function slideTransition(){
    let element = document.querySelector("body");
    if(indexImage == images.length){
        indexImage = 0;
        element.style.backgroundImage = "url('"+ images[indexImage] +"');";
    }else {
        element.style = "background-image: url('"+ images[indexImage] +"');";
        indexImage++;
    }
}

setInterval(slideTransition, 5000);