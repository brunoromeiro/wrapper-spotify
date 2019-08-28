import { API_URL } from './config';
import { toJSON } from './utils'

export const getAlbum = (id) => {
  fetch(`https://${API_URL}/albums/${id}`).then(toJSON)
}

export const getAlbuns = (id) => {
  fetch(`https://${API_URL}/albums?ids=${id}`).then(toJSON)
}

export const getAlbumTracks = (id) => {
  fetch(`https://${API_URL}/albums/${id}/tracks`).then(toJSON)
}
