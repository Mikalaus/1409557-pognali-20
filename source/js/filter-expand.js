var open = document.querySelector(".filter__expend-button");
var filterExp = document.querySelector(".filter__filter-expended");
var close = document.querySelector(".filter__close-expended-button");

open.addEventListener("click", function () {
  open.classList.toggle("filter__expend-button_close");
  filterExp.classList.toggle("filter__filter-expended_hidden");
});

close.addEventListener("click", function () {
  open.classList.toggle("filter__expend-button_close");
  filterExp.classList.toggle("filter__filter-expended_hidden");
});
