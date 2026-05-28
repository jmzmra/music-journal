function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function renderReviewList(reviews) {
  if (!reviews.length) {
    return '<p>No reviews yet.</p>';
  }

  const items = reviews
    .map((review) => `<li>${escapeHtml(review.text)}</li>`)
    .join('');

  return `<ul class="review-list">${items}</ul>`;
}
