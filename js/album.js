import { initMenu } from "./menu.js";
import { loadAlbumImages } from "./image_loader.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  loadAlbumImages('all');
});
