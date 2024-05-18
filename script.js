document.addEventListener('DOMContentLoaded', (event) => {
    const playlist = document.getElementById('list');
    const songRow = document.getElementById('song-row');

    songs.forEach((song, index) => {
        const clone = songRow.cloneNode(true);
        clone.removeAttribute('id');

        clone.querySelector('#order').textContent = index + 1;
        clone.querySelector('#song-title').textContent = song.title;
        clone.querySelector('#song-artist').textContent = song.artist;
        clone.querySelector('#song-album').textContent = song.album;
        clone.querySelector('#song-duration').textContent = song.duration;
        clone.querySelector('.cover').src = song.coverURL;

        clone.querySelector('.cover-wrap').setAttribute('data-song-url', song.songURL);

        playlist.appendChild(clone);
    });

    songRow.remove();

    const coverWraps = document.querySelectorAll('.cover-wrap');
    coverWraps.forEach(coverWrap => {
        coverWrap.addEventListener('click', function() {
            const songURL = this.getAttribute('data-song-url');
            if (songURL) {
                window.open(songURL, '_blank');
            }
        });
    });

});

const songs = [
    {
        title: 'Uncle ACE',
        artist: 'Blood Orange',
        album: 'Cupid Deluxe',
        duration: '4:17',
        coverURL: 'covers/uncleace.jpeg',
        songURL: 'https://open.spotify.com/track/0Cn4UhpHhgf88eWaS9nn5u?si=44a97dde700c4e26'
    },
    {
        title: 'DOGTOOTH',
        artist: 'Tyler, The Creator',
        album: 'CALL ME IF YOU GET LOST',
        duration: '2:41',
        coverURL: 'covers/dogtooth.jpg',
        songURL: 'https://open.spotify.com/track/6OfOzTitafSnsaunQLuNFw?si=a6ae2390c45b4288'
    },
    {
        title: 'Strangers',
        artist: 'Ethel Cain',
        album: "Preacher's Daughter",
        duration: '5:44',
        coverURL: 'covers/strangers.png',
        songURL: 'https://open.spotify.com/track/5Cc0Pe8p7c2OJxMj07ywvc?si=bf0b1707f2e342e4'
    },
    {
        title: 'Good Luck, Babe!',
        artist: 'Chappell Roan',
        album: 'Good Luck, Babe!',
        duration: '3:38',
        coverURL: 'covers/goodluckbabe.webp',
        songURL: 'https://open.spotify.com/track/0WbMK4wrZ1wFSty9F7FCgu?si=96f6d112d7904ad2'
    },
    {
        title: 'The Dress',
        artist: 'Dijon',
        album: 'Absolutely',
        duration: '3:05',
        coverURL: 'covers/thedress.jpg',
        songURL: 'https://open.spotify.com/track/0YMe6PHRbeDcN7KJdCG0bW?si=cf71ac0149794540'
    },
];