import { getSongsParagraphsRequest } from "./requests.js";

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
