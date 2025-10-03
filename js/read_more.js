export function initReadMore() {
    const btnReadMore = document.getElementById("btn-read-more");
    const presentation = document.getElementById("presentation");

    if (!btnReadMore || !presentation) {
        return;
    }

    btnReadMore.addEventListener("click", () => {
        presentation.classList.remove("is-clamped");
        presentation.classList.add("is-unclamped");
        btnReadMore.style.display = "none";
    });
}
