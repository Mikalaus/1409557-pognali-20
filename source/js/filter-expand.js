var open = document.querySelector(".filter__expend-button");
var filterExp = document.querySelector(".filter__filter-expended");
var close = document.querySelector(".filter__close-expended-button");
var countryList = document.querySelector(".filter__country-list");

countryList.classList.add("filter__country-list_hidden-mobile");

open.addEventListener("click", function () {
  open.classList.toggle("filter__expend-button_close");
  filterExp.classList.toggle("filter__filter-expended_hidden");
  countryList.classList.toggle("filter__country-list_hidden-mobile");
});

close.addEventListener("click", function () {
  open.classList.toggle("filter__expend-button_close");
  filterExp.classList.toggle("filter__filter-expended_hidden");
  countryList.classList.toggle("filter__country-list_hidden-mobile");
});
