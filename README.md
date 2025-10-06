# 🎨 MissBelka Art Portfolio

**Author:** Vitaliy Beletskiy  
**Course:** MU25 – Grundläggande Frontend-programmering  
**Exam:** Individual Project (Week 8)

## 🌐 Live Demo

Visit the project online at:  
👉 [https://beletskiy.com/mu25/missbelka](https://beletskiy.com/mu25/missbelka)

## Project Description
This project is a **responsive art portfolio website** designed to present and explore the watercolor and ink artworks of **MissBelka**.  
The site allows visitors to browse an image gallery, view artwork details, and read about the artist in a clean, minimalist layout.

The project demonstrates skills in **semantic HTML**, **modern responsive CSS**, and **interactive JavaScript**, following the course requirements for *Grundläggande Frontend-programmering (MU25)*.

## Technologies Used

### HTML
- Semantic structure using `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Accessible images with descriptive `alt` text.
- Correct heading structure using `<h1>`, `<h2>`, etc. for clear page hierarchy.

### CSS
- Fully external stylesheet for maintainability.
- Responsive design supporting **mobile**, **tablet**, and **desktop** breakpoints.
- Layout built with **CSS Grid** for the artwork gallery and **Flexbox** for smaller components.
- Use of CSS variables for consistent color and typography management.

### JavaScript (ES6+)
- Uses `const` / `let` declarations and **arrow functions**.
- DOM manipulation via `querySelector`, `classList`, and dynamic HTML generation.
- Event handling with `addEventListener`.
- Includes conditions, loops, and higher-order functions such as `forEach` and `map`.

## Interactive Features

- **Dynamic Artwork Gallery**  
  The site loads artwork data from a JSON file (`album.json`) and dynamically generates HTML code for the gallery using JavaScript.  
  Visitors can click on any artwork to view it in full size.

- **Responsive Dropdown Menu (Mobile Navigation)**  
  On smaller screens, the site uses a **hamburger button** to toggle the mobile navigation menu.

- **Contact Dialog with Validation**  
  The site includes a modal **“Message to Nadezda”** dialog that allows visitors to send a short message.

- **“Read More” Toggle Functionality**  
  Long text descriptions (e.g. artist bio) are truncated by default. A button allows users to smoothly expand or collapse the text.

- **Scroll-to-Top Button**  
  A floating button appears when scrolling down and provides a smooth scroll back to the top of the page.

These interactive features were implemented using modern ES6 syntax and DOM manipulation techniques.

## Challenges & Solutions

### 1. Relative Paths in `fetch()`
**Problem:** The JSON file didn’t load because relative paths in modules resolve differently from the HTML base path.  
**Solution:** Adjusted paths and tested local vs. server environments to ensure consistent fetching.

### 2. Responsive Image Layout
**Problem:** Images with very tall or wide proportions caused inconsistent grid heights.  
**Solution:** Introduced `object-fit: cover` and `max-height` constraints to maintain visual harmony.

### 3. Text Clamping Animation
**Problem:** CSS `line-clamp` didn’t transition smoothly.  
**Solution:** Combined `max-height` transitions with `overflow: hidden` for smooth open/close animation.

## How to Run the Project

1. Clone or download the repository.  
2. Open `index.html` in any modern web browser.  
3. Make sure the folder structure is preserved (especially `/data/album.json` and `/images/gallery/`).

> No external build tools or servers are required — everything runs locally.