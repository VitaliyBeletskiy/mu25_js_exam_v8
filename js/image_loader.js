/** Load images for Album preview. */
import { Artwork } from "./artwork.model.js";

function el(tag, props = {}) {
  return Object.assign(document.createElement(tag), props);
}

function createDocumentFragmentForArtworks(artworks) {
  const fragment = document.createDocumentFragment();

  /* below we create this HTML structure for each artwork:
            <article id="artwork-101" class="artw">
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
  artworks.forEach((artwork) => {
    /* added only to satisfy exam requirement "destructuring"
         otherwise I would use properties of Artwork directly. */
    const { filename, title, size, price } = artwork;

    // <h3 class="artw-title">White Wisdom</h3>
    const h3 = el("h3", { className: "artw-title", textContent: title });
    // <div class="artw-price">4&nbsp;000 kr</div>
    const priceDiv = el("div", { className: "artw-price", innerHTML: price });
    // <div class="artw-row">...</div>
    const rowDiv = el("div", { className: "artw-row" });
    rowDiv.appendChild(h3);
    rowDiv.appendChild(priceDiv);
    // <div class="artw-size">40,0 × 50,0 cm</div>
    const sizeDiv = el("div", { className: "artw-size", textContent: size });
    // <div class="artw-info">...</div>
    const infoDiv = el("div", { className: "artw-info" });
    infoDiv.appendChild(rowDiv);
    infoDiv.appendChild(sizeDiv);
    // <img src="images/gallery/001_tn.webp" alt="White Wisdom" width="400" height="400" loading="lazy" decoding="async"/>
    const img = el("img", {
      src: `images/gallery/${filename}_tn.webp`,
      alt: title,
      width: 400,
      height: 400,
      loading: "lazy",
      decoding: "async",
    });
    // <a class="artw-media" href="images/gallery/001.webp">...</a>
    const link = el("a", {
      className: "artw-media",
      href: `images/gallery/${filename}.webp`,
    });
    link.appendChild(img);
    // <article id="artwork-101" class="artw">
    const article = el("article", {
      id: `artwork-${filename}`,
      className: "artw",
    });
    article.appendChild(link);
    article.appendChild(infoDiv);

    fragment.appendChild(article);
  });
  return fragment;
}

async function loadArtworks(url = new URL("../data/album.json", import.meta.url)) {
  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    throw new Error(`Failed to load JSON: ${res.status} ${res.statusText}`);
  }

  const raw = await res.json();
  if (!Array.isArray(raw)) throw new Error("JSON root must be an array");

  return raw.map((item) => new Artwork(item));
}

/**
 * @param {number|'all'} limit
 */
export async function loadAlbumImages(limit = 4) {
  const albumGrid = document.querySelector(".album-grid");
  const txtWorksNumber = document.getElementById("works-number");
  if (!albumGrid || !txtWorksNumber) {
    throw new Error("No album-grid or works-number element found in DOM");
  }

  let selectedArtworks;
  let artworksNumber = 0;
  try {
    const artworks = await loadArtworks();
    artworksNumber = artworks.length;
    const sortedArtworks = artworks.sort((a, b) =>
      Number(a.filename) > Number(b.filename) ? 1 : -1
    );
    selectedArtworks =
      limit === "all" ? sortedArtworks : sortedArtworks.slice(0, limit);
  } catch (error) {
    console.error("Error loading artworks:", error);
    albumGrid.textContent = "Failed to load album preview.";
    return;
  }

  const fragment = createDocumentFragmentForArtworks(selectedArtworks);

  albumGrid.innerHTML = "";
  albumGrid.appendChild(fragment);
  txtWorksNumber.textContent = artworksNumber;
}
