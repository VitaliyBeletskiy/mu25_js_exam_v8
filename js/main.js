import { initMenu } from "./menu.js";
import { loadAlbumPreviewImages } from "./album_preview.js";
import { initDialog } from "./dialog.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  loadAlbumPreviewImages();
  initDialog();
});
