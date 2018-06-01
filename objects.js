var playlist = {artist:name};

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({},playlist,{artistName:[songTitle]})
  
}