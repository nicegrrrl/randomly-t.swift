import { handleAlbumCoverClick } from "./albums.js";

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

  return list;
};
