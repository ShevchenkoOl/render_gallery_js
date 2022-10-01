import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryTemplate =({preview, original, description}) =>`
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`

const imagesContainer = document.querySelector(".gallery");
const galleryList = galleryItems.map(galleryItem => galleryTemplate(galleryItem)).join('');
imagesContainer.insertAdjacentHTML("afterbegin", galleryList);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
	captionDelay: 250
})

//export {galleryTemplate}