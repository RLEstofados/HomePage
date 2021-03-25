let images  = [
    "image/cadeira8.jpg",
    "image/almofada.jpg",
    "image/cadeira2.jpg",
    "image/home8.jpg",
    "image/home7.jpg",
    "image/home3.jpg"
], 
indexImage = 0;

function slideTransition(e){
    let element = document.querySelector("body");
    if(indexImage == images.length){
        indexImage = 0;
        element.style.backgroundImage = "url('"+ images[indexImage] +"');";
    }else {
        element.style = "background-image: url('"+ images[indexImage] +"');";
        indexImage++;
    }
}
console.log("inicio");
setInterval(slideTransition, 5000);