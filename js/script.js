var array = [
    './../img/Estudio12-Challenge_0516.jpg',
    './../img/Estudio12-Challenge_0516.jpg',
    './../img/Estudio12-Challenge_0516.jpg'],
    position = 0;
    imgDuration = 6000;

function sliderfade() {
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = array[position];
        document.getElementById('slider').className = "";
    },1000);
    position++;
    if (position == array.length) { position = 0; }
    setTimeout(sliderfade, imgDuration);
}
sliderfade();


function displayMenu(){
    document.getElementById('responsive-menu').classList.toggle("opened");
}

