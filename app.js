window.onscroll = () => scrollCheck();



function scrollCheck () {
    console.log("muppet")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("#navbar").style.padding = ".5%";
} else {
    document.querySelector("#navbar").style.padding = "3%";
}
}
