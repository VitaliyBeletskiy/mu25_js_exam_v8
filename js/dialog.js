/** Dialog init */
export function initDialog() {
  const dialog = document.querySelector("dialog");
  const form = document.getElementById("dialog-form");
  const inputName = document.getElementById("dialog__name-input");
  const inputMessage = document.getElementById("dialog__message-input");
  const btnClose = document.getElementById("dialog__close-button");
  const btnsShowDialog = document.querySelectorAll(".show-dialog");

  if (
    !form ||
    !inputName ||
    !inputMessage ||
    !dialog ||
    !btnsShowDialog ||
    !btnClose
  ) {
    return;
  }

  btnsShowDialog.forEach((btn) => {
    btn.addEventListener("click", () => {
      dialog.showModal();
    });
  });

  btnClose.addEventListener("click", () => {
    inputName.setCustomValidity("");
    inputMessage.setCustomValidity("");
    form.reset();
    dialog.close();
  });

  const hasLetters = (s) => /\p{L}/u.test(s);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // reset custom error messages
    inputName.setCustomValidity("");
    inputMessage.setCustomValidity("");

    if (!hasLetters(inputName.value.trim())) {
      inputName.setCustomValidity("Name must contain letters.");
    }
    if (!hasLetters(inputMessage.value.trim())) {
      inputMessage.setCustomValidity("Message must contain text.");
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // form.submit();
    form.reset();
    dialog.close();
    alert("Message sent!");
  });
  // when User starts typing -> clear custom error message
  [inputName, inputMessage].forEach((el) => {
    el.addEventListener("input", () => el.setCustomValidity(""));
  });
}
