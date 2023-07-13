import { getSongsParagraphsRequest } from "./requests.js";

export const renderAlbumsCover = (array) => {
  const list = document.querySelector(".albums-cover");

  array.forEach((album) => {
    const listItem = document.createElement("li");
    const cover = document.createElement("img");

    cover.classList.add("cover");

    cover.src = album.cover;

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
