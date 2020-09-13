var likeList = document.querySelectorAll(".photo__like-button");

for (let i = 0; i < likeList.length; i++){
  likeList[i].addEventListener("click", function () {
    likeList[i].classList.toggle("photo__like-button_active");
  });
}
