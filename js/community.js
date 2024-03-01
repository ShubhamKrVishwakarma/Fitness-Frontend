const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notification');

const messages = document.querySelector('.messages');

const message = document.querySelectorAll('.message');

const messageSearch = document.querySelector('#message-search');

var root = document.querySelector(":root");

// Remove Active Class from All Menu Items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id !== "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    });
});

// ================ Messages ====================

messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

// ================ THEME CUSTOMIZATION ====================

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

theme.addEventListener("click", function() {
    themeModal.style.display = "grid";
});

themeModal.addEventListener("click", function(e) {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
});

// ================ Change Font Size ====================

const fontSizes = document.querySelectorAll(".choose-size span");

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    });
}

fontSizes.forEach(size => {
    size.addEventListener("click", function() {
        let fontSize;
        removeSizeSelector();
        size.classList.add("active");

        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) { 
            fontSize = "16px";
            root.style.setProperty("----sticky-top-left", "-2rem");
            root.style.setProperty("----sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("----sticky-top-left", "-5rem");
            root.style.setProperty("----sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("----sticky-top-left", "-10rem");
            root.style.setProperty("----sticky-top-right", "-33rem");
        }
        document.querySelector("html").style.fontSize = fontSize;
    });
});

// ================ Change Font Size ====================

const colorPalette = document.querySelectorAll(".choose-color span");

const changeActiveColor = () => {
    colorPalette.forEach(color => {
        color.classList.remove("active");
    })
}

colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        let primaryHue;
        changeActiveColor();

        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) { 
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }

        color.classList.add("active");
        
        root.style.setProperty("--primary-color-hue", primaryHue);
    });
});

// ================ Choose BG ====================

const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
}

bg1.addEventListener("click", ()=> {
    bg1.classList.add("active");
    bg2.classList.remove("active");
    bg3.classList.remove("active");

    window.location.reload();
});

bg2.addEventListener("click", ()=> {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    bg2.classList.add("active");
    bg1.classList.remove("active");
    bg3.classList.remove("active");

    changeBG();
});

bg3.addEventListener("click", ()=> {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    bg3.classList.add("active");
    bg1.classList.remove("active");
    bg2.classList.remove("active");

    changeBG();
});