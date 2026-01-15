function pops() {
    let popup = document.querySelector(".popper");
    let flakes = document.querySelector(".flakes");
    let video = document.querySelector(".edit");
    let vids = document.querySelector(".vids");

    popup.classList.add("active");
    flakes.classList.add("active");

    setTimeout(() => {
        popup.classList.remove("active");
    }, 1000);

    setTimeout(() => {
        flakes.classList.remove("active");
    }, 2000);

    video.classList.add("active");
    vids.currentTime = 0;
    vids.play();
}

function hide() {
    document.querySelector(".edit").classList.remove("active");
    document.querySelector(".vids").pause();

    document.querySelector(".pics").classList.add("active");
}

/*Carousel Code*/

function left() {
    img1 = document.querySelector(".img1");
    img2 = document.querySelector(".img2");
    img3 = document.querySelector(".img3");

    if (img2.classList.contains("active")) {
        img2.classList.remove("active");
        img1.classList.add("active");
    }
    else if (img1.classList.contains("active")) {
        img1.classList.remove("active");
        img3.classList.add("active");
    }
    else if (img3.classList.contains("active")) {
        img3.classList.remove("active");
        img1.classList.add("active");
    }
}

function right() {
    img1 = document.querySelector(".img1");
    img2 = document.querySelector(".img2");
    img3 = document.querySelector(".img3");

    if (img2.classList.contains("active")) {
        img2.classList.remove("active");
        img3.classList.add("active");
    }
    else if (img1.classList.contains("active")) {
        img1.classList.remove("active");
        img2.classList.add("active");
    }
    else if (img3.classList.contains("active")) {
        img3.classList.remove("active");
        img1.classList.add("active");
    }
}

function choose() {
    document.querySelector(".pics").classList.remove("active");
}
