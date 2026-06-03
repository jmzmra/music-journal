export function renderFeaturedPage(albums) {
    return `
    <section>
      <h1>Featured</h1>
      ${albums.map(a => `<div>${a.title}</div>`).join('')}
    </section>
  `;
}