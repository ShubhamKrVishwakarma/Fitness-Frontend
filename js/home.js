window.addEventListener("scroll", () => {
    let animate = document.querySelectorAll(".animate");

    for (let i=0 ; i<animate.length ; i++) {
        let windowHeight = window.innerHeight;
        let animateTop = animate[i].getBoundingClientRect().top;
        let Point = 110;
        
        if (animateTop < windowHeight - Point) {
            animate[i].classList.add("show-animation");
        } else {
            animate[i].classList.remove("show-animation");
        }
    }

    let animate2 = document.querySelectorAll(".animate-2");
    for (let i=0 ; i<animate2.length ; i++) {
        let windowHeight = window.innerHeight;
        let animate2Top = animate2[i].getBoundingClientRect().top;
        let Point = 110;
        if (animate2Top < windowHeight - Point) {
            animate2[i].classList.add("left-side-in");
        } else {
            animate2[i].classList.remove("left-side-in");
        }
    }
    let animate3 = document.querySelectorAll(".animate-3");
    for (let i=0 ; i<animate3.length ; i++) {
        let windowHeight = window.innerHeight;
        let animate3Top = animate3[i].getBoundingClientRect().top;
        let Point = 110;
        if (animate3Top < windowHeight - Point) {
            animate3[i].classList.add("right-side-in");
        } else {
            animate3[i].classList.remove("right-side-in");
        }
    }
});