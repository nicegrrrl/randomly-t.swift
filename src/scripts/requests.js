import { api } from "../scripts/axios.js";

// get all albums
export const getAllAlbumsRequest = async () => {
  const allAlbums = await api
    .get(`/albums`)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));

  return allAlbums;
};

// get songs within an album
export const getSongsWithinAnAlbumRequest = async (albumId) => {
  const albumSongs = await api
    .get(`albums/${albumId}`)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));

  return albumSongs;
};

// get lyrics for a given song
export const getLyricsForGivingSongRequest = async (songId) => {
  const lyricsGivingSong = await api
    .get(`/lyrics/${songId}`)
    .then((res) => console.log(res.data))
    .catch((err) => err.message);

  return lyricsGivingSong;
};

// get N paragraphs of lyrics from songs
export const getSongsParagraphsRequest = async (boolean, number) => {
  const songsParagraphs = await api
    .get(
      `/lyrics?shouldRandomizeLyrics=${boolean}&numberOfParagraphs=${number}`
    ) // procurar objeto get query
    .then((res) => res.data.lyrics)
    .catch((err) => console.log(err.message));

  return songsParagraphs;
};

// get all songs
export const getAllSongsRequest = async () => {
  const allSongs = await api
    .get(`/songs`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message));

  return allSongs;
};

// get song information for a specific song
export const getSongInformation = async (songId) => {
  const songInformation = await api
    .get(`/songs/${songId}`)
    .then((res) => res.data)
    .catch((err) => console.log(err.message));

  return songInformation;
};
