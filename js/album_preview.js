/** Load images for Album preview. */
import { Artwork } from "./artwork.model.js";

export async function loadAlbumPreviewImages() {
  async function loadArtworks(url = "../data/album.json") {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) {
      throw new Error(`Failed to load JSON: ${res.status} ${res.statusText}`);
    }

    const raw = await res.json();
    if (!Array.isArray(raw)) throw new Error("JSON root must be an array");

    return raw.map((item) => new Artwork(item));
  }

  const albumGrid = document.querySelector(".album-grid");
  try {
    const artworks = await loadArtworks();
    const previewArtworks = artworks
      .sort((a, b) => (Number(a.title) > Number(b.title) ? 1 : -1))
      .slice(0, 4);
    const fragment = document.createDocumentFragment();

    /*      <article id="artwork-101" class="artw">
              <a class="artw-media" href="images/gallery/001.webp">
                <img src="images/gallery/001_tn.webp" alt="White Wisdom" width="400" height="400" loading="lazy" decoding="async"/>
              </a>
              <div class="artw-info">
                <div class="artw-row">
                  <h3 class="artw-title">White Wisdom</h3>
                  <div class="artw-price">4&nbsp;000 kr</div>
                </div>
                <div class="artw-size">40,0 × 50,0 cm</div>
              </div>
            </article> */
    previewArtworks.forEach((artwork) => {
      // added only to satisfy exam requirement
      const { filename, title, size, price } = artwork;

      // <h3 class="artw-title">White Wisdom</h3>
      const h3 = document.createElement("h3");
      h3.className = "artw-title";
      h3.textContent = title;
      // <div class="artw-price">4&nbsp;000 kr</div>
      const priceDiv = document.createElement("div");
      priceDiv.className = "artw-price";
      priceDiv.innerHTML = price;
      // <div class="artw-row">...</div>
      const rowDiv = document.createElement("div");
      rowDiv.className = "artw-row";
      rowDiv.appendChild(h3);
      rowDiv.appendChild(priceDiv);
      // <div class="artw-size">40,0 × 50,0 cm</div>
      const sizeDiv = document.createElement("div");
      sizeDiv.className = "artw-size";
      sizeDiv.textContent = size;
      // <div class="artw-info">...</div>
      const infoDiv = document.createElement("div");
      infoDiv.className = "artw-info";
      infoDiv.appendChild(rowDiv);
      infoDiv.appendChild(sizeDiv);
      // <img src="images/gallery/001_tn.webp" alt="White Wisdom" width="400" height="400" loading="lazy" decoding="async"/>
      const img = document.createElement("img");
      img.src = `images/gallery/${filename}_tn.webp`;
      img.alt = title;
      img.width = 400;
      img.height = 400;
      img.loading = "lazy";
      img.decoding = "async";
      // <a class="artw-media" href="images/gallery/001.webp">...</a>
      const link = document.createElement("a");
      link.className = "artw-media";
      link.href = `images/gallery/${filename}.webp`;
      link.appendChild(img);
      // <article id="artwork-101" class="artw">
      const article = document.createElement("article");
      article.id = `artwork-${filename}`;
      article.className = "artw";
      article.appendChild(link);
      article.appendChild(infoDiv);

      fragment.appendChild(article);
    });

    albumGrid.innerHTML = "";
    albumGrid.appendChild(fragment);
  } catch (error) {
    console.error("Error loading artworks:", error);
    albumGrid.textContent = "Failed to load album preview.";
  }
}
