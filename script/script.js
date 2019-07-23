'use strict';

let fileInput = document.querySelector('.file__download');
let textContainer = document.querySelector('.check-text');

fileInput.addEventListener('change', readText);

var reader = new FileReader();

/**
 * read text input
 */
function readText(evt) {
    var output = ""; //placeholder for text output
    let targetFile = evt.target;

    if(targetFile.files && targetFile.files[0]) {
        reader.onload = function (e) {
            output = e.target.result;
            displayContents(output);
        };//end onload()
        reader.readAsText(targetFile.files[0]);
    }

    return true;
}

/**
 * display content using a basic HTML replacement
 */
function displayContents(txt) {
    textContainer.innerHTML = txt;
}
