import { getData, setData } from './storageService.js';

const REVIEWS_KEY = 'music-journal-reviews';

function generateReviewId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// Reviews are stored by album id so the UI can load them quickly per album.
export function getReviewsForAlbum(albumId) {
  const reviewsByAlbum = getData(REVIEWS_KEY, {});
  return reviewsByAlbum[albumId] || [];
}

export function addReview(albumId, reviewText) {
  const text = reviewText.trim();
  if (!text) {
    return false;
  }

  const reviewsByAlbum = getData(REVIEWS_KEY, {});
  const albumReviews = reviewsByAlbum[albumId] || [];

  albumReviews.push({
    id: generateReviewId(),
    text
  });

  reviewsByAlbum[albumId] = albumReviews;
  setData(REVIEWS_KEY, reviewsByAlbum);
  return true;
}
