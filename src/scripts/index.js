import { renderRandomLyrics } from "./renderIndex.js";

const handleRandomLyricsButtonClick = () => {
  const randomLyricsButton = document.querySelector(".random-lyrics__button");

  randomLyricsButton.addEventListener("click", () => renderRandomLyrics());
};

const handleMasterpiecesButtonClick = () => {
  const masterpiecesButton = document.querySelector(".masterpieces__button");

  masterpiecesButton.addEventListener("click", () =>
    location.replace("../src/pages/albums.html")
  );
};

renderRandomLyrics();
handleMasterpiecesButtonClick();
handleRandomLyricsButtonClick();
