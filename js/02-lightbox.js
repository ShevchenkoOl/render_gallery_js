import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');
const gallaryTemlate = ({preview, original, description }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`;
const galleryList = galleryItems.map(item => gallaryTemlate(item)).join('');
list.insertAdjacentHTML('afterbegin', galleryList);

new SimpleLightbox('.gallery a', {  // .gallery - it is class name, a - it is tag
    captionsData: "alt",
    captionDelay: 250,
    close: true,
   captionPosition: 'top'
   });
