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
