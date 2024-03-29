/* SHOW MENU */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener("click", () => {
            // console.log("clicked");
            nav.classList.toggle("show");
        });
    }
}

showMenu("nav-toggle", "nav-menu");

/* REMOVE MENU */

const navLink = document.querySelectorAll(".nav__link"),
navMenu = document.getElementById("nav-menu");

function linkAction() {
    navMenu.classList.remove("show");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

/* SCROLL SECTIONS ACTIVE LINK */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectioNHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectioNHeight) {
            document.querySelector(".nav__menu a[href *=" + sectionId + "]").classList.add("active");
        }
        else {
            document.querySelector(".nav__menu a[href *=" + sectionId + "]").classList.remove("active");
        }
    });
}

/* CHANGE COLOR HEADER */

window.onscroll = () => {
    const nav = document.getElementById("header");
    
    if(this.screenY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}