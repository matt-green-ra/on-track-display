function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("icon").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("icon").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000);
}

var images = [], x = -1;
images[0] = "icons/icon-01.png";
images[1] = "icons/icon-02.png";
images[2] = "icons/icon-03.png";
images[3] = "icons/icon-04.png";
images[4] = "icons/icon-05.png";
images[5] = "icons/icon-06.png";
images[6] = "icons/icon-07.png";
images[7] = "icons/icon-09.png";
images[8] = "icons/icon-10.png";
images[9] = "icons/icon-11.png";
images[10] = "icons/icon-12.png";
images[11] = "icons/icon-13.png";
images[12] = "icons/icon-14.png";
images[13] = "icons/icon-15.png";
images[14] = "icons/icon-16.png";
images[15] = "icons/icon-17.png";
images[16] = "icons/icon-18.png";
images[17] = "icons/icon-19.png";
images[18] = "icons/icon-20.png";
images[19] = "icons/icon-21.png";
images[20] = "icons/icon-22.png";
images[21] = "icons/icon-23.png";
images[22] = "icons/icon-24.png";
images[23] = "icons/icon-25.png";
images[24] = "icons/icon-26.png";
images[25] = "icons/icon-27.png";
images[26] = "icons/icon-29.png";
images[27] = "icons/icon-30.png";
images[28] = "icons/icon-31.png";
images[29] = "icons/icon-32.png";
