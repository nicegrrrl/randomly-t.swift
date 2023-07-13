import { renderAlbumsCover } from "../scripts/render.js";
import {
  getAllAlbumsRequest,
  getAllSongsRequest,
  getLyricsForGivingSongRequest,
  getSongInformation,
  getSongsParagraphsRequest,
  getSongsWithinAnAlbumRequest,
} from "../scripts/requests.js";
import { albums } from "../scripts/database.js";

// getAllAlbumsRequest();
// getSongsWithinAnAlbumRequest(8);
// getLyricsForGivingSongRequest(120);
// getSongsParagraphsRequest(true, 6);
// getAllSongsRequest();
// getSongInformation(3);
renderAlbumsCover(albums);
