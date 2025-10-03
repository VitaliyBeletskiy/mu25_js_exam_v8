export function initToTop() {
  const btnTop = document.getElementById("btn-to-top");
  if (!btnTop) throw new Error("Button #btn-to-top not found");

  function toggleToTop() {
    if (window.scrollY > 300) {
      btnTop.classList.add("is-visible");
    } else {
      btnTop.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", toggleToTop);
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
