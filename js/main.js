import { initMenu } from "./menu.js";
import { loadAlbumImages } from "./image_loader.js";
import { initDialog } from "./dialog.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  loadAlbumImages();
  initDialog();
});
