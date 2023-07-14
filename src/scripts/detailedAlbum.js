import { renderAlbum } from "./renderAlbum.js";
import { albums } from "./database.js";

const changePageTitle = () => {
  const pageTitle = document.querySelector("title");
  const selectedAlbumTitle = localStorage.getItem(
    "@randomlyTSwift:selectedAlbum"
  );

  pageTitle.innerText = selectedAlbumTitle;
};

const handleRandomLyricsButtonClick = () => {
  const randomLyricsButtom = document.querySelector(".random-lyrics__button");

  randomLyricsButtom.addEventListener("click", () =>
    location.replace("../../")
  );
};

const handleMasterpiecesButtonClick = () => {
  const masterpiecesButton = document.querySelector(".masterpieces__button");

  masterpiecesButton.addEventListener("click", () =>
    location.replace("../pages/albums.html")
  );
};

changePageTitle();
renderAlbum(albums);
handleRandomLyricsButtonClick();
handleMasterpiecesButtonClick();
