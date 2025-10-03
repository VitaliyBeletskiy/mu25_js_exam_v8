import { initMenu } from "./menu.js";
import { initToTop } from "./to_top.js";
import { loadAlbumImages } from "./image_loader.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initToTop();
  loadAlbumImages("all");
});
