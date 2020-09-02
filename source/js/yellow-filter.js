var contentBlockList = document.querySelectorAll(".companion-filter__content-block");
var expendButtonsList = document.querySelectorAll(".companion-filter__expend-button");
var expendList = document.querySelectorAll(".companion-filter__title-part");

for (let i = 0; i < contentBlockList.length; i++){
  contentBlockList[i].classList.toggle("companion-filter__content-block_hidden");
}

for (let i = 0; i < expendList.length; i++){
  expendList[i].addEventListener("click", function () {
    expendButtonsList[i].classList.toggle("companion-filter__expend-button_open");
    contentBlockList[i].classList.toggle("companion-filter__content-block_hidden");
  });
}
