window.onscroll = () => scrollCheck();

function scrollCheck () {

    console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("#navbar").style.padding = ".5%";
} else if (document.documentElement.scrollTop + 30 < 100){
    document.querySelector("#navbar").style.padding = "1.5%";
}
}

// let paused = false;

// const stars = document.querySelector("#jumbotron")

// stars.addEventListener("click", toggleVideo)

// // .addEventListener("click", () => console.log("muppet"))
// function toggleVideo () {
//     if (paused) {
//         stars.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.play();
//         paused = false;
//     } else {
//         stars.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.pause()
//         paused = true;
//     }

// }