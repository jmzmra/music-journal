// no lazy loading for now

import { renderFeaturedPage } from './pages/featuredPage.js';
import { renderFeedPage } from './pages/feedPage.js';
import { renderCatalogPage } from './pages/catalogPage.js';

export function createRouter(appRoot, renderNavbar, getState) {

    function getRoute() {
        const hash = window.location.hash;

        if (!hash || hash === '#') return 'featured';

        return hash.replace('#', '');
    }

    function renderRoute() {
        const route = getRoute();
        const state = getState();

        // no reviews, no backend logic
        const albums = state.albums;

        let html = '';

        if (route === 'featured') {
            html = renderFeaturedPage(albums);
        }

        else if (route === 'feed') {
            html = renderFeedPage(albums);
        }

        else if (route === 'catalog') {
            html = renderCatalogPage(albums);
        }

        else {
            html = '<h1>404 Not Found</h1>';
        }

        appRoot.innerHTML = html;
        renderNavbar(route);
    }

    function init() {
        window.addEventListener('hashchange', renderRoute);

        // initial render
        renderRoute();
    }

    return {
        init,
        renderRoute
    };
}