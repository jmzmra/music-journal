export function renderFeaturedPage(albums) {
  return `
    <main class="home-container">
      
      <!-- 1. GENIUS FEATURE ARTICLE STYLE (Reference: image_a4a2e6.jpg) -->
      <section class="featured-header-story">
        <div class="editorial-grid">
          <div class="feature-text-block">
            <div class="feature-header-line">FEATURE</div>
            <h1 class="heading-hero">Charli XCX's <span>"360"</span> Decodes the Algorithmic Obsession of Modern Fame.</h1>
            <p class="desc-hero">An inside look at high-velocity production layers, hyperpop references, and why this standout release serves as the ultimate mirror of contemporary internet status. We dissect synths and visual signatures.</p>
            <div class="feature-action-row">
              <button class="btn btn-primary" onclick="window.location.hash='#album-detail?id=1'">Read Analysis</button>
              <span class="read-metadata">5 min read • Volume Editorial Board</span>
            </div>
          </div>
          
          <div class="feature-side-showcase">
            <div class="quote-showcase">
              <div class="quote-header">
                <span class="badge-editorial">Highlight Quote</span>
                <span class="page-marker">Page 12</span>
              </div>
              <blockquote class="quote-heading">"I'm everywhere, I'm so diva... I'm your favorite reference, baby."</blockquote>
              <div class="quote-author-profile">
                <div class="author-avatar-wrapper">
                  <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" fill="var(--accent)" /><circle cx="22" cy="22" r="3" fill="#fff" /><circle cx="38" cy="22" r="3" fill="#fff" /><path d="M22,34 Q30,40 38,34" fill="none" stroke="#fff" stroke-width="3" /></svg>
                </div>
                <div class="author-meta">
                  <div class="author-name">Charli XCX</div>
                  <div class="album-context">Brat (2024)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. WHAT SYMPHONIQUE LETS YOU DO (Onboarding Activity Cards) -->
      <section class="intro-grid-container">
        <h2 class="intro-title">Step Into Your Personal Music Journal</h2>
        <div class="grid-three-col">
          <div class="intro-card">
            <div class="intro-card-icon card-indigo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </div>
            <h3 class="intro-card-title">Review & Index</h3>
            <p class="intro-card-desc">Grade records on an authentic 1-5 star framework and log track dynamics, production notes, or acoustic elements.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-icon card-purple-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <h3 class="intro-card-title">Curate Your Shelf</h3>
            <p class="intro-card-desc">Pin classic masterpieces onto your favorites display board to visually map your musical profile.</p>
          </div>
          <div class="intro-card">
            <div class="intro-card-icon card-emerald-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 class="intro-card-title">Sync with Curators</h3>
            <p class="intro-card-desc">Gain perspective from our global critical network. Like other users' journals and follow experienced reviewers.</p>
          </div>
        </div>
      </section>

      <!-- 3. MAIN TABULAR & SOCIAL HUD GRID SPLIT -->
      <div class="main-layout-columns">
        
        <!-- LEFT COLUMN: CHARTS (Reference: image_a45129.png & image_a45107.png) -->
        <div class="left-column-charts">
          <div class="charts-header-row">
            <h2 class="charts-title">CHARTS</h2>
            <div class="charts-filter-dropdown">
              SONGS / ALL GENRES / TODAY 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>

          <div class="genius-chart-list">
            <!-- Row 1 (Active/Trending Highlight - image_a45129.png) -->
            <div class="chart-row trending-highlight">
              <span class="row-rank">1</span>
              <img class="row-cover" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23222433'/%3E%3C/svg%3E" alt="Cover" />
              <div class="row-song-title">hate that i made you love me <span class="lyrics-tag">LYRICS</span></div>
              <div class="row-artist">Ariana Grande</div>
              <div class="row-velocity-badge">🔥 118</div>
              <div class="row-views">👁 961.6K</div>
            </div>

            <!-- Row 2 -->
            <div class="chart-row">
              <span class="row-rank">2</span>
              <img class="row-cover" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23222433'/%3E%3C/svg%3E" alt="Cover" />
              <div class="row-song-title">Janice STFU <span class="lyrics-tag">LYRICS</span></div>
              <div class="row-artist">Drake</div>
              <div class="row-velocity-badge"></div>
              <div class="row-views">👁 1.4M</div>
            </div>

            <!-- Row 3 -->
            <div class="chart-row">
              <span class="row-rank">3</span>
              <img class="row-cover" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23222433'/%3E%3C/svg%3E" alt="Cover" />
              <div class="row-song-title">the cure <span class="lyrics-tag">LYRICS</span></div>
              <div class="row-artist">Olivia Rodrigo</div>
              <div class="row-velocity-badge"></div>
              <div class="row-views">👁 1.2M</div>
            </div>
            
            <!-- JavaScript dynamically appends positions 4 through 20 here -->
          </div>

          <!-- Minimalist Square Action Button (Reference: image_a45107.png) -->
          <button class="genius-load-more-btn">LOAD MORE</button>
        </div>

        <!-- RIGHT COLUMN: SOCIAL STREAM FEEDS (Letterboxd Style Layout) -->
        <div class="right-column-social">
          
          <!-- POPULAR REVIEWS THIS WEEK -->
          <div class="social-section">
            <h2 class="section-heading">Popular Reviews This Week</h2>
            <div class="letterboxd-review-stream">
              <article class="stream-card">
                <div class="card-top">
                  <span class="user">revolver_fan</span>
                  <span class="stars">★★★★★</span>
                </div>
                <div class="target-subject">Stereo Horizons <span class="sub-label">ALBUM</span></div>
                <p class="excerpt">"A masterclass in modern spatial production tracking. The synth layers on track 4 bleed beautifully into the next track's dynamic layout..."</p>
              </article>
              
              <article class="stream-card">
                <div class="card-top">
                  <span class="user">sonic_scribe</span>
                  <span class="stars">★★★★☆</span>
                </div>
                <div class="target-subject">Vivid Lucid <span class="sub-label">SONG</span></div>
                <p class="excerpt">"Fascinating annotation potential on the second verse. The direct callbacks to early 90s ambient breakbeat rules are incredibly clean."</p>
              </article>
            </div>
          </div>

          <!-- POPULAR LISTS -->
          <div class="social-section">
            <h2 class="section-heading">Popular Lists</h2>
            <div class="letterboxd-lists-stack">
              <a href="#list1" class="list-stack-item">
                <div class="list-title">Cyberpunk Textures & Deep Bass Layers</div>
                <div class="list-author">by neon_ghost • 48 songs</div>
              </a>
              <a href="#list2" class="list-stack-item">
                <div class="list-title">Perfect Masterpieces with Zero Filler Tracks</div>
                <div class="list-author">by curation_king • 12 albums</div>
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- 4. POPULAR REVIEWERS SECTION -->
      <section class="reviewers-board-section">
        <h2 class="section-heading">Popular Reviewers This Week</h2>
        <div class="reviewers-matrix">
          <div class="reviewer-profile-pill">
            <div class="p-avatar">🎧</div>
            <div class="p-details">
              <div class="p-name">anthony_needle</div>
              <div class="p-stats">412 reviews • 8.1K logs</div>
            </div>
          </div>
          <div class="reviewer-profile-pill">
            <div class="p-avatar">💿</div>
            <div class="p-details">
              <div class="p-name">chroma_key</div>
              <div class="p-stats">198 reviews • 3.4K logs</div>
            </div>
          </div>
          <div class="reviewer-profile-pill">
            <div class="p-avatar">📻</div>
            <div class="p-details">
              <div class="p-name">analog_dreamer</div>
              <div class="p-stats">314 reviews • 6.2K logs</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. WEBSITE INFO SECTION (Final Page Block) -->
      <footer class="website-info-section">
        <div class="info-grid">
          <div class="info-branding">
            <div class="info-logo">Symphonique</div>
            <p class="info-tagline">The community-driven metadata ledger mapping lyrical annotations, tracking chart trends, and indexing your music listening history.</p>
          </div>
          <div class="info-links-column">
            <h4>Platform</h4>
            <a href="#charts">Global Charts</a>
            <a href="#feed">Community Feed</a>
            <a href="#catalog">Lyric Catalog</a>
          </div>
          <div class="info-links-column">
            <h4>Account</h4>
            <a href="#signup">Create Journal</a>
            <a href="#login">Sign In</a>
            <a href="#premium">Pro Tier</a>
          </div>
        </div>
        <div class="info-bottom-bar">
          <p>© 2026 Symphonique Inc. Powered by community annotations.</p>
        </div>
      </footer>

    </main>
  `;
}