import { galleryItems } from "./gallery-items.js";
const list = document.querySelector(".gallery");
//----------------Method #1
// using the insertAdjacentHTML method - which allows you to insert HTML markup inside an element at the specified position "afterbegin"
// galleryItems.forEach((item) => {
//   list.insertAdjacentHTML(
//     "afterbegin",
//     `<li class=" gallery__item">
//         <a class="gallery__link" href="${item.original}">
//             <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"</img>
//         </a>
//     </li>`
//   );
// });

//----------------Method #2
//Using a template string. This is an arrow function that takes an object with three properties (preview, original, description) and returns a string containing the HTML markup of the gallery element.

const gallaryTemplate = ({ preview, original, description }) => `
<li class=" gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        </img>
      </a>
</li>
`;

// .map() is an array method that creates a new array by applying a callback function (galleryItem => galleryTemplate(galleryItem)) to all elements of the original array. In this case, galleryTemplate(galleryItem) is called for each object in galleryItems. This means that for each gallery element an HTML string is generated using galleryTemplate.
// .join('') is an array method that joins all the array elements into one string using a specified delimiter. In this case, the delimiter is the empty string ''.
const gallaryList = galleryItems
  .map((galleryItem) => gallaryTemplate(galleryItem))
  .join("");

//Inserting HTML into a container:
list.insertAdjacentHTML("afterbegin", gallaryList);

//---------------------Modal window with using library basicLightbox

list.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) { // This check is used to ensure that the event was fired on the element with class "gallery__image".
    return;
  }
  const src = event.target.getAttribute("data-source");
  
  //Template from library documentation
  const instance = basicLightbox.create(`
          <img src="${src}"/>
  `);
  instance.show(); // opening window

  list.addEventListener("keydown", (event) => {//triggering an event on a button Escape
    if (event.key === "Escape") { 
      instance.close(); // closing window
    }
  });
});
