import { handleAlbumCoverClick } from "./albums.js";

export const renderAlbumsCover = (array) => {
  const list = document.querySelector(".albums__list");

  array.forEach((album) => {
    const listItem = document.createElement("li");
    const cover = document.createElement("img");

    cover.classList =
      "album__cover cursor-pointer x-[200px] h-[200px] rounded grayscale hover:transition-all hover:ease-in-out hover:duration-150 hover:grayscale-0 hover:scale-105";

    cover.dataset.albumTitle = album.title;
    cover.src = album.cover;
    cover.alt = "cover";
    cover.addEventListener("click", (event) => handleAlbumCoverClick(event));

    list.append(listItem);
    listItem.append(cover);
  });

  return list;
};
