import { handleAlbumCoverClick } from "./albums.js";
import { getSongsParagraphsRequest } from "./requests.js";

export const renderAlbumsCover = (array) => {
  const list = document.querySelector(".albums__list");

  array.forEach((album) => {
    const listItem = document.createElement("li");
    const cover = document.createElement("img");

    cover.classList.add("album__cover");

    cover.dataset.albumTitle = album.title;
    cover.src = album.cover;
    cover.alt = "cover";
    cover.addEventListener("click", (event) => handleAlbumCoverClick(event));

    list.append(listItem);
    listItem.append(cover);
  });

  console.log(list);
  return list;
};

export const renderRandomLyrics = async () => {
  const lyrics = document.querySelector(".lyrics");

  lyrics.innerHTML = "";

  const randomLyrics = await getSongsParagraphsRequest(true, 1);
  console.log(randomLyrics);

  randomLyrics.forEach((element) => {
    const paragraph = document.createElement("p");

    paragraph.innerText = element;

    lyrics.append(paragraph);
  });

  return lyrics;
};
