import { initMenu } from "./menu.js";
import { loadAlbumImages } from "./album_preview.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  loadAlbumImages('all');
});
