import { getAlbums } from '../../backend/services/albumService.js';

import { state } from './core/state.js';
import { Navbar } from './components/navbar.js';
import { createRouter } from './router.js';

const appRoot = document.querySelector('#app');
const navbarRoot = document.querySelector('#navbar');

/* ---------------------------
   LOAD DATA
----------------------------*/
function loadInitialData() {
  state.albums = getAlbums();
}

/* ---------------------------
   STATE ACCESS FOR ROUTER
----------------------------*/
function getState() {
  return {
    albums: state.albums
  };
}

/* ---------------------------
   NAVBAR
----------------------------*/
function renderNavbar(activeRoute) {
  navbarRoot.innerHTML = Navbar(activeRoute);
}

/* ---------------------------
   INIT APP
----------------------------*/
loadInitialData();

const router = createRouter(appRoot, renderNavbar, getState);

router.init();