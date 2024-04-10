import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');

  
  galleryItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;
    image.setAttribute('data-source', item.original);

    link.appendChild(image);
    listItem.appendChild(link);
    gallery.appendChild(listItem);
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250 
  });
});

console.log(galleryItems);