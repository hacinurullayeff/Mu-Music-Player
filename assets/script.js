// Name , Artist , Music , Image
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const music = document.querySelector('audio')
const image = document.getElementById('image')

// Controls
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

// Object
const songs = [
    {
        name:'dord2sifir',
        displayName: 'Mənəm mən',
        artist:'dord2sifir',
        image:'dord2sifir'
    },
    {
        name:'kadirozel',
        displayName: 'Gel Aşk',
        artist:'Kadir Özel',
        image:'kadirozel'
    },
    {
        name:'model',
        displayName: 'Değmesin ellerimiz',
        artist:'Model',
        image:'model'
    },
    {
        name:'paster',
        displayName: 'Qayıt Gəl',
        artist:'Paster',
        image:'paster'
    }
]

let isPlaying = false



function playSong(){
    isPlaying = true
    playBtn.classList.replace('fa-play','fa-pause')
    music.play()
}

function pauseSong(){
    isPlaying = false
    playBtn.classList.replace('fa-pause','fa-play')
    music.pause()
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()))

function loadSong(song){
    title.innerText = song.displayName
    artist.innerText = song.artist
    music.src = `./assets/musics/${song.name}.mp3`
    image.src = `./assets/img/${song.image}.jpg`

}

let songIndex = 0

function prevSong(){
    songIndex--
    if(songIndex<0){
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    playSong()
}

function nextSong(){
    songIndex++
    if(songIndex>songs.length-1){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

loadSong(songs[songIndex])

window.onload = playSong