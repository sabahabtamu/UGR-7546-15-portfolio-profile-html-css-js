const sidebar = document.querySelector('.sidebar__menu');
const menuIcon = document.querySelector('.menu__icon');
const body = document.body;

menuIcon.addEventListener('click', function () {
 if(!sidebar.classList.contains('active')) {
    sidebar.classList.add('active');
 } else {
    sidebar.classList.remove('active')
 }
});


body.addEventListener('click', function (event) {
  if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && event.target !== menuIcon) {
    sidebar.classList.remove('active');
  }
});

  newFunction();

function newFunction() {
    var audio = document.getElementById("myAudio");
    var video = document.getElementById("myVideo");

    audio.addEventListener("play", function () {
        if (!video.paused) {
            video.pause();
        }
    });

    video.addEventListener("play", function () {
        if (!audio.paused) {
            audio.pause();
        }
    });
}
