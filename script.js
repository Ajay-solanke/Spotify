console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gift = document.getElementById("gift");
let mastersongName = document.getElementById("mastersongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs =[
    {songName:"Apna_Time_Aayega", failepath: "", coverpath: "covers/1.jpg"},
    {songName:"_SAKHIYAAN_(Full_Song)_", failepath: "songs/2mp3", coverpath: "covers/2.jpg"},
    {songName:"Aastha_Gill_-_Buzz__", failepath: "songs/3mp3", coverpath: "covers/3.jpg"},
    {songName:"✓#sun_sonio_-_studio_", failepath: "", coverpath: "covers/4.jpg"},
    {songName:"Baby_baith_chipa_", failepath: "songs/4mp3", coverpath: "covers/5.jpg"},
    {songName:"Aww_Tera_Happy_Bday_", failepath: "songs/5mp3", coverpath: "covers/6.jpg"},
    {songName:"HATH_CHUMME_-_AMMY_VIRK_", failepath: "songs/26mp3", coverpath: "covers/7.jpg"},
    {songName:"Hue_Bechain__", failepath: "songs/7mp3", coverpath: "covers/8.jpg"},
    {songName:"Jay-Jaykara__Baahubali_2_", failepath: "songs/8mp3", coverpath: "covers/9.jpg"},
    {songName:"Kaun_Hoyega_", failepath: "songs/9mp3", coverpath: "covers/10.jpg"},
]

songItems.forEach((element,i) =>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gift.style.opacity = 1;
}
else{
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-add-circle');
      gift.style.opacity = 0;
}
})
// Listen to Events
audioElement.addEventListener("timeupdate", ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllplays = ()=>{
 Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}

 Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';    
         mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex<=9){
        songIndex = 0
    }
    else{
        songIndex +=1
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex =0
    }
    else{
        songIndex -=1
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})