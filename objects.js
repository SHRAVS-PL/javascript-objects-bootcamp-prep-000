var playlist = {artist:name};

function updatePlaylist(playlist,artistName,songTitle) {
  Object.assign({},{artistName:songTitle})
  return playlist
}