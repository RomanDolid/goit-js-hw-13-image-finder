import template from '../templates/template.hbs';
import refs from './refs';

const rendering = {
  arrListImg: async ({ hits }) => {
    if (Number(localStorage.getItem('page')) === 1) {
      refs.imageList.innerHTML = '';
    }

    const imgList = template(hits);

    return rendering.render(imgList);
  },

  render: async imgList => {
    refs.imageList.insertAdjacentHTML('beforeend', imgList);
    if (refs.button.disabled) {
      refs.button.disabled = false;
      refs.button.classList.remove('is-hidden');
    }
  },
};

export default rendering;
