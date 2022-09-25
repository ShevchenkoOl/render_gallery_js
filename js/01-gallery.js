import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryTemplate =({preview, original, description}) =>`
<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
const imagesContainer = document.querySelector(".gallery");
const galleryList = galleryItems.map(galleryItem => galleryTemplate(galleryItem)).join('');
imagesContainer.insertAdjacentHTML("afterbegin", galleryList);

//-------------------Modal window --------------------------

imagesContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}">
`)
    instance.show()
    
    imagesContainer.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
})
