import { renderAlbumsCover, renderRandomLyrics } from "../scripts/render.js";
import {
  getAllAlbumsRequest,
  getAllSongsRequest,
  getLyricsForGivingSongRequest,
  getSongInformation,
  getSongsParagraphsRequest,
  getSongsWithinAnAlbumRequest,
} from "../scripts/requests.js";
import { albums } from "../scripts/database.js";

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

// renderRandomLyrics();
handleMasterpiecesButtonClick();
handleRandomLyricsButtonClick();

// getAllAlbumsRequest();
// getSongsWithinAnAlbumRequest(8);
// getLyricsForGivingSongRequest(120);
// getSongsParagraphsRequest(true, 6);
// getAllSongsRequest();
// getSongInformation(3);
