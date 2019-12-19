window.onscroll = () => scrollCheck();

function scrollCheck () {

    console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("#navbar").style.padding = ".5%";
} else if (document.documentElement.scrollTop + 30 < 100){
    document.querySelector("#navbar").style.padding = "1.5%";
}
}