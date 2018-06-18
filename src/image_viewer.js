import big from '../assets/big.jpg';
import small from '../assets/small.jpeg';

import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;


document.body.appendChild(image);


const image2 = document.createElement('img');
image2.src = big;


document.body.appendChild(image2);