const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageName = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altName = {'pic1.jpg': 'Human Eye', 'pic2.jpg': 'Rock', 'pic3.jpg': 'Blue and White flowers', 'pic4.jpg': 'Drawing', 'pic5.jpg': 'Butterfly'};

/* Looping through images */

for(image of imageName){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', altName[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function(e){
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
};



/* Wiring up the Darken/Lighten button */
