var playlist = {artist:name};

function updatePlaylist(playlist,artistName,songTitle) {
  Object.assign({},playlist,{artistName:songTitle})
  return playlist
}