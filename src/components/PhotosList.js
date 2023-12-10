import { useFetchPhotosQuery } from "../store";

function PhotosList({ album }) {
    useFetchPhotosQuery(album);
    return `Photos List: ${album.id}`
}

export default PhotosList;