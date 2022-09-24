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

//-------------------Modal window need to fix--------------------------

imagesContainer.addEventListener('click', onImageHandleClick);
const instance = {
    openImageInModal (image) {
        const instance = basicLightbox.create(`
            <div class="modal">
                <img src="${image.dataset.source}"/>
            </div>`);
        instance.show();
    },
    closeModal() {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                console.log(e);
                instance.close();
            }
        })
    }
}
function onImageHandleClick (evt){
    evt.preventDefault();
    const isImage = evt.target.classList.contains('gallery__image');
    if ( !isImage ) {return};
    const activeImage = evt.target;
   instance.openImageInModal(activeImage);
    instance.closeModal();
} 


// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show();