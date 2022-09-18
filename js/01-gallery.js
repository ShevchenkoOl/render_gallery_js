import { galleryItems } from './gallery-items.js';
// Change code below this line
// 

const listEmage = document.querySelector('.gallery');
const markup = galleryItems.map((galleryItem) => `<li class="items"><img class = "items-image" src = ${galleryItem.preview} alt = ${galleryItem.description} width="800" height="600"/></li>`)
.join("");

listEmage.insertAdjacentHTML("beforeend", markup);