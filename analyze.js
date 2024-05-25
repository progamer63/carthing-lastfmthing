function analyze() {
let img = document.getElementById('realArt');
colorjs.average(img, {format:"hex"}).then(color => {  
    var ogcolor = tinycolor(color);
    if (ogcolor == "#ffffff") {
        ogcolor = "#EDEDED";
    }
    if (ogcolor == "#000000") {
        ogcolor = "#2D2D2D";
    }
    var color = ogcolor.saturate(5).darken(15).toString();
    var darkercolor = ogcolor.darken(5).toString();
    document.documentElement.style.setProperty("--image-color", color);
    document.documentElement.style.setProperty("--image-color-darker", darkercolor);
});
}
analyze();
setInterval(analyze, 250);