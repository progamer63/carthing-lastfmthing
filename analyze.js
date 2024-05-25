function analyze() {
let img = document.getElementById('realArt');
colorjs.average(img, {format:"hex"}).then(color => {  
    document.documentElement.style.setProperty("--image-color", color);
});
}
analyze();
setInterval(analyze, 100);