import { renderReviewList } from './reviewList.js';
import { renderReviewForm } from './reviewForm.js';

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function renderAlbumList(albumsWithReviews) {
  return `
    <section>
      <h2>Albums</h2>
      <div class="album-list">
        ${albumsWithReviews
          .map((album) => {
            return `
              <article class="album-card">
                <h3>${escapeHtml(album.title)}</h3>
                <p><strong>Artist:</strong> ${escapeHtml(album.artist)}</p>
                ${renderReviewList(album.reviews)}
                ${renderReviewForm(album.id)}
              </article>
            `;
          })
          .join('')}
      </div>
    </section>
  `;
}
