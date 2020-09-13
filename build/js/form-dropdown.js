country = document.querySelector(".add-plan__country-name_choose");
flag = document.querySelector(".add-plan__country-flag_choose");
dropdown = document.querySelector(".add-plan__choose-country-dropdown");
countryTitle = document.querySelector(".add-plan__country-title_choose");
deleteBut = document.querySelector(".add-plan__delete-button_choose");
expendBut = document.querySelector(".add-plan__list-open-button_choose");

console.log(expendBut);

expendBut.addEventListener("click", function (event) {
  event.preventDefault();
});

country.addEventListener("click", function () {
  expendBut.classList.toggle("add-plan__list-open-button_dropdown-open");
  flag.classList.toggle("add-plan__country-flag_dropdown-open");
  country.classList.toggle("add-plan__country-name_dropdown-open");
  dropdown.classList.toggle("add-plan__choose-country-dropdown_hidden");
  countryTitle.classList.toggle("add-plan__country-title_dropdown-open");
  deleteBut.classList.toggle("add-plan__delete-button_dropdown-open");
});

flag.addEventListener("click", function () {
  expendBut.classList.toggle("add-plan__list-open-button_dropdown-open");
  flag.classList.toggle("add-plan__country-flag_dropdown-open");
  country.classList.toggle("add-plan__country-name_dropdown-open");
  dropdown.classList.toggle("add-plan__choose-country-dropdown_hidden");
  countryTitle.classList.toggle("add-plan__country-title_dropdown-open");
  deleteBut.classList.toggle("add-plan__delete-button_dropdown-open");
});
