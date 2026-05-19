const dialog = document.querySelector("dialog");

document.querySelector(".button-model").addEventListener("click", function () {
  //   document.querySelector("dialog").style.display = "block";
  dialog.showModal();
});

document.querySelector(".model-close").addEventListener("click", function () {
  //   document.querySelector("dialog").style.display = "block";
  dialog.close();
});
