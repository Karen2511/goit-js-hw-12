import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52398872-c12541878b4eb59882334d5d5';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: PER_PAGE,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
