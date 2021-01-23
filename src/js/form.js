import refs from './refs';
import fetchImage from './apiService';

refs.button.disabled = true;

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.setItem('page', fetchImage.page);

  const query = event.target.children[0].value;
  const page = localStorage.getItem('page');

  if (query !== '' && query.indexOf(' ') < 0) {
    fetchImage.fetchImages(query, page);
  } else {
    refs.imageList.innerHTML = '';
    refs.button.classList.add('is-hidden');
  }
});
