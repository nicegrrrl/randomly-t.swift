export const renderAlbum = (array) => {
  const selectedAlbumName = localStorage.getItem(
    "@randomlyTSwift:selectedAlbum"
  );

  const foundedAlbum = array.filter(
    (album) => album.title === selectedAlbumName
  );

  const currentAlbum = foundedAlbum[0];

  renderAlbumCard(currentAlbum);
  renderSpotify(currentAlbum);
};

const renderAlbumCard = (album) => {
  const cover = document.querySelector(".album__info-cover");
  const title = document.querySelector(".album__title");
  const releasedYear = document.querySelector(".album__released-year");

  cover.src = album.cover;
  title.innerText = album.title;
  releasedYear.innerText = album.releasedYear;

  if (album.wasStolen && album.hasTV) {
    const showStolenVersion = document.querySelector(
      ".stolen-version__button--show"
    );
    const taylorsVersionReleasedYear = document.querySelector(
      ".tv-album__released-year"
    );

    taylorsVersionReleasedYear.innerText = `💫 taylor's version ${album.releasedYearTV}`;
  }
};

const renderSpotify = (album) => {
  const tracklistSection = document.querySelector(".album__tracklist");

  tracklistSection.innerHTML = album.spotify;
};
