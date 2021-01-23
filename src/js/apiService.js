import axios from 'axios';
import rendering from './rendering';

const fetchImage = {
  baseUrl: 'https://pixabay.com/api/',
  query: '',
  settings: '?image_type=photo&orientation=horizontal',
  page: 1,
  perPage: 12,
  key: '19986694-2a4121189ab57813819af57bc',

  fetchImages: async (query, page) => {
    const { data } = await axios.get(
      `${fetchImage.baseUrl}${fetchImage.settings}&q=${query}&page=${page}&per_page=${fetchImage.perPage}&key=${fetchImage.key}`,
    );
    return rendering.arrListImg(data);
  },
};

export default fetchImage;
