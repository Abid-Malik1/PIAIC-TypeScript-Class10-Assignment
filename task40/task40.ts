function makeAlbum(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

const album1 = makeAlbum("Artist 1", "Album Title 1");
const album2 = makeAlbum("Artist 2", "Album Title 2", 12);

console.log(album1);
console.log(album2);
