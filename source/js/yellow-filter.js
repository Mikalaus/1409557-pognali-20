var contentBlockList = document.querySelectorAll(".companion-filter__content-block");
var expendButtonsList = document.querySelectorAll(".companion-filter__expend-button");

for (let i = 0; i < expendButtonsList.length; i++){
  expendButtonsList[i].addEventListener("click", function () {
    expendButtonsList[i].classList.toggle("companion-filter__expend-button_open");
    contentBlockList[i].classList.toggle("companion-filter__content-block_hidden");
  });
}
