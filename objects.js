var playlist = {artist:name};

function updatePlaylist(playlist,artistName,songTitle) {
  playlist.assign({},{artistName:songTitle})
  return playlist
}