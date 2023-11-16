const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//MObile nav
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Get references to the buttons and menu lists
const mainButton = document.querySelector(".btn-menu:nth-child(1)");
const dessertButton = document.querySelector(".btn-menu:nth-child(2)");
const drinksButton = document.querySelector(".btn-menu:nth-child(3)");
const mainMenuList = document.querySelector(".menu-list.active");
const dessertMenuList = document.querySelector(".menu-list.unactive");

// Add click event listeners to the buttons
mainButton.addEventListener("click", () => {
  mainButton.classList.add("btn-active");
  dessertButton.classList.remove("btn-active");
  drinksButton.classList.remove("btn-active");
  mainMenuList.classList.remove("unactive");
  dessertMenuList.classList.add("unactive");
});

dessertButton.addEventListener("click", () => {
  mainButton.classList.remove("btn-active");
  dessertButton.classList.add("btn-active");
  drinksButton.classList.remove("btn-active");
  mainMenuList.classList.add("unactive");
  dessertMenuList.classList.remove("unactive");
});

drinksButton.addEventListener("click", () => {
  mainButton.classList.remove("btn-active");
  dessertButton.classList.remove("btn-active");
  drinksButton.classList.add("btn-active");
  mainMenuList.classList.add("unactive");
  dessertMenuList.classList.add("unactive");
});
