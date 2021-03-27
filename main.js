window.addEventListener("keypress", (e) => {
    playAudio(e.key);
});
function btnClicked(clicked) {
    playAudio(this.getAttribute("data-key"));
}
function playAudio(key) {
    let keyDiv = document.querySelector(`.key[data-key="${key}"]`);
    let audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    keyDiv.firstChild.classList.add("playing");
    window.setTimeout(() => {
        keyDiv.firstChild.classList.remove("playing");
    }, 100);
}
let buttons = document.querySelectorAll(".key");
buttons.forEach((btn) => btn.onclick = btnClicked);
