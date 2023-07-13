import { albums } from "./database.js";
import { renderAlbumsCover } from "./render.js";

const handleRandomLyricsButtonClick = () => {
  const randomLyricsButtom = document.querySelector(".random-lyrics__buttom");

  randomLyricsButtom.addEventListener("click", () =>
    location.replace("../../")
  );
};

export const handleAlbumCoverClick = (event) => {
  const albumSelectedName = event.target.dataset.albumTitle;
  localStorage.setItem("@randomlyTSwift:selectedAlbum", albumSelectedName);
};

const modifyString = (originalString) => {
  const words = originalString.split(" ");
  let modifiedString = words.join("");
  const letters = modifiedString.split("");

  letters[0] = letters[0].toLowerCase();
  modifiedString = letters.join("");

  return modifiedString;
};

handleRandomLyricsButtonClick();
renderAlbumsCover(albums);
modifyString("Call It Out");
