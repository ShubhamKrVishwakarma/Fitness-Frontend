const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notification');

const messages = document.querySelector('.messages');

const message = document.querySelectorAll('.message');

const messageSearch = document.querySelector('#message-search');

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

