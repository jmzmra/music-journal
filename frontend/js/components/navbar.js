export function Navbar(activePage = "featured") {
  return `
    <nav class="navbar">
      <div class="nav-left">
        <div class="logo-container">Symphonique</div>

        <ul class="nav-links">
          <li><a href="#featured" class="${activePage === 'featured' ? 'active' : ''}">Featured</a></li>
          <li><a href="#feed" class="${activePage === 'feed' ? 'active' : ''}">Feed</a></li>
          <li><a href="#catalog" class="${activePage === 'catalog' ? 'active' : ''}">Catalog</a></li>
        </ul>
      </div>
      
      <div class="nav-right">
        <!-- Upgraded to a moving gradient pill -->
        <a href="#signup" class="signup-gradient-pill">Sign Up</a>
        
        <div class="search-wrapper">
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin='round'><circle cx='11' cy='11' r='8'></circle><line x1='21' y1='21' x2='16.65' y2='16.65'></line></svg>
          <input type="text" class="search-bar" placeholder="Search songs & more" />
        </div>
      </div>
    </nav>
  `;
}