var slideInde = 0;
Slides();

function Slides() {
    var j;
    var slides = document.getElementsByClassName("Slides");
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    slideInde++;
    if (slideInde > slides.length) {
        slideInde = 1
    }
    slides[slideInde - 1].style.display = "block";
    setTimeout(Slides, 7000);
}