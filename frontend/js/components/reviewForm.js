import { escapeHtml } from '../core/escapeHtml.js';

export function renderReviewForm(albumId) {
  return `
    <form class="review-form" data-album-id="${escapeHtml(albumId)}">
      <input name="review" type="text" placeholder="Write a review" required />
      <button type="submit">Add Review</button>
    </form>
  `;
}
