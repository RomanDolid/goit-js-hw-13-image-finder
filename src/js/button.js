import refs from './refs';
import fetchImage from './apiService';

refs.button.addEventListener('click', () => {
  let page = localStorage.getItem('page');
  if (page === null) {
    localStorage.setItem('page', 1);
  } else {
    const nextPage = Number(page) + 1;
    localStorage.setItem('page', nextPage);
  }

  const query = refs.form.children[0].value;
  page = localStorage.getItem('page');

  fetchImage.fetchImages(query, page);
});
