import { getAlbums } from '../../backend/services/albumService.js';
import { addReview, getReviewsForAlbum } from '../../backend/services/reviewService.js';
import { state } from './core/state.js';
import { renderHomePage } from './pages/homePage.js';

const appRoot = document.querySelector('#app');

function render() {
  const albumsWithReviews = state.albums.map((album) => ({
    ...album,
    reviews: getReviewsForAlbum(album.id)
  }));

  appRoot.innerHTML = renderHomePage(albumsWithReviews);
}

function loadInitialData() {
  state.albums = getAlbums();
}

function handleReviewSubmit(event) {
  const form = event.target.closest('.review-form');
  if (!form) {
    return;
  }

  event.preventDefault();
  const albumId = form.dataset.albumId;
  const input = form.querySelector('input[name="review"]');

  const wasAdded = addReview(albumId, input.value);
  if (!wasAdded) {
    return;
  }

  form.reset();
  render();
}

function init() {
  loadInitialData();
  render();
  appRoot.addEventListener('submit', handleReviewSubmit);
}

init();
