const API_KEY = '39770884-54ae51e65da93280e548e1d6e';
const URL = `https://pixabay.com/api/`;
const PerPage = 12;

export function fetchGalleryImg(searchQuery, page) {
  return fetch(
    `${URL}?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PerPage}&page=${page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
