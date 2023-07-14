import { albums } from "./database.js";
import { renderAlbumsCover } from "./renderAlbums.js";

const handleRandomLyricsButtonClick = () => {
  const randomLyricsButtom = document.querySelector(".random-lyrics__button");

  randomLyricsButtom.addEventListener("click", () =>
    location.replace("../../")
  );
};

export const handleAlbumCoverClick = (event) => {
  const albumSelectedName = event.target.dataset.albumTitle;
  localStorage.setItem("@randomlyTSwift:selectedAlbum", albumSelectedName);
  location.replace("./detailedAlbum.html");
};

handleRandomLyricsButtonClick();
renderAlbumsCover(albums);
