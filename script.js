document.addEventListener('DOMContentLoaded', function() {

// Initializing variables
const image1 = document.querySelector('#img1');
const image2 = document.querySelector('#img2');
const image3 = document.querySelector('#img3');
const image4 = document.querySelector('#img4');
const image5 = document.querySelector('#img5');
const image6 = document.querySelector('#img6');
const blur = document.querySelector('#buttonBlur');
const noColor = document.querySelector('#buttonNoColor');
const defaultColor = document.querySelector('#buttonDefault');
const background = document.querySelector('#background-container');


// Add event listeners
image1.addEventListener('click', setBackground);
image2.addEventListener('click', setBackground);
image3.addEventListener('click', setBackground);
image4.addEventListener('click', setBackground);
image5.addEventListener('click', setBackground);
image6.addEventListener('click', setBackground);
blur.addEventListener('click', setBlur);
noColor.addEventListener('click', setGrayScale);
defaultColor.addEventListener('click', setDefault);

// Function definitions
function setBackground(image) {

    background.style.background = `url('${image.target.src}')`;
    background.style.backgroundSize = 'cover';
}

function setBlur() {
    background.style.filter = 'blur(5px)';
}

function setGrayScale() {
    background.style.filter = 'grayscale(100%)';
}

function setDefault() {
    background.style.filter = '';
}

});