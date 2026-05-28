export function renderReviewForm(albumId) {
  return `
    <form class="review-form" data-album-id="${albumId}">
      <input name="review" type="text" placeholder="Write a review" required />
      <button type="submit">Add Review</button>
    </form>
  `;
}
