var open = document.querySelector(".price-list__open-buisness");
var buisnessList = document.querySelector(".buisness-list");
var close = document.querySelector(".buisness-list__close");

open.addEventListener("click", function () {
  buisnessList.classList.remove("buisness-list_close");
});

close.addEventListener("click", function () {
  buisnessList.classList.add("buisness-list_close");
});
