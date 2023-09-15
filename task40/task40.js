function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Artist 1", "Album Title 1");
var album2 = makeAlbum("Artist 2", "Album Title 2", 12); // Including the number of tracks
console.log(album1);
console.log(album2);
