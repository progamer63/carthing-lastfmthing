function analyze() {
let img = document.getElementById('realArt');
colorjs.average(img, {format:"hex"}).then(color => {  
    var ogcolor = tinycolor(color);
    var color = ogcolor.darken(5).toString();
    if (color == "#ffffff") {
        color = "#EDEDED";
    }
    if (color == "#000000") {
        color = "#2D2D2D";
    }
    document.documentElement.style.setProperty("--image-color", color);
});
}
analyze();
setInterval(analyze, 250);