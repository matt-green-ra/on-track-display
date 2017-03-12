function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

//display multiple random images

var imageList = [
    "icons/icon-1.png",
    "icons/icon-2.png",
    "icons/icon-3.png",
    "icons/icon-4.png",
    "icons/icon-5.png",
    "icons/icon-6.png",
    "icons/icon-7.png",
    "icons/icon-8.png",
    "icons/icon-9.png",
    "icons/icon-10.png"
];

function updateRandomImages() {
    var imageElements = $('img');
    $.each(imageElements, function(index, element) {
        displayRandomImage(element);
    });
}

function displayRandomImage(element) {
    var index = getRandomNumber();
    $(element).attr( 'src', imageList[index] );
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

//start off with some random images
updateRandomImages();
