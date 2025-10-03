import { initMenu } from "./menu.js";
import { loadAlbumImages } from "./image_loader.js";
import { initDialog } from "./dialog.js";
import { initReadMore } from "./read_more.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  loadAlbumImages();
  initDialog();
  initReadMore();
});
