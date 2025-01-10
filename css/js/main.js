const menuEl = document.querySelector(".fa-bars");
const closeEl = document.querySelector(".fa-x");
const navEl = document.querySelector(".header__nav");

menuEl.addEventListener("click", ()=>{
    menuEl.style.visibility = "hidden";
    closeEl.style.visibility = "visible";
    navEl.classList.add('nav-active');
})
closeEl.addEventListener("click", ()=>{
    closeEl.style.visibility = "hidden";
    menuEl.style.visibility = "visible";
})
  // Get the audio and video elements
  newFunction();

function newFunction() {
    var audio = document.getElementById("myAudio");
    var video = document.getElementById("myVideo");

    // Add event listener for audio play
    audio.addEventListener("play", () => {
        // Pause the video when audio starts playing
        if (!video.paused) {
            video.pause();
        }
    });

    // Add event listener for video play
    video.addEventListener("play", () => {
        // Pause the audio when video starts playing
        if (!audio.paused) {
            audio.pause();
        }
    });
}
