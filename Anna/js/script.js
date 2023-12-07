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
const mainMenuList = document.querySelector(".menu-list.active.main");
const dessertMenuList = document.querySelector(".menu-list.unactive.dessert");
const drinksMenuList = document.querySelector(".menu-list.unactive.drinks");

// Add click event listeners to the buttons
mainButton.addEventListener("click", () => {
  mainButton.classList.add("btn-active");
  dessertButton.classList.remove("btn-active");
  drinksButton.classList.remove("btn-active");
  mainMenuList.classList.remove("unactive");
  dessertMenuList.classList.add("unactive");
  drinksMenuList.classList.add("unactive");
});

dessertButton.addEventListener("click", () => {
  mainButton.classList.remove("btn-active");
  dessertButton.classList.add("btn-active");
  drinksButton.classList.remove("btn-active");
  mainMenuList.classList.add("unactive");
  dessertMenuList.classList.remove("unactive");
  drinksMenuList.classList.add("unactive");
});

drinksButton.addEventListener("click", () => {
  mainButton.classList.remove("btn-active");
  dessertButton.classList.remove("btn-active");
  drinksButton.classList.add("btn-active");
  mainMenuList.classList.add("unactive");
  dessertMenuList.classList.add("unactive");
  drinksMenuList.classList.remove("unactive");
});

// ------------PART 3------------

// Функція для отримання даних з JSON файлу
async function getMenuData() {
  try {
    const response = await fetch("menu.json"); // Шлях до JSON файлу
    const data = await response.json(); // Конвертація в JSON формат
    return data.menu; // Повернення масиву зі списком страв
  } catch (error) {
    console.error("Помилка завантаження даних:", error);
  }
}

// Функція для відображення страв на сторінці за вказаною категорією
async function displayMenuByCategory(category) {
  const menuData = await getMenuData(); // Отримання даних про страви

  // Знаходження DOM елементу, куди буде відображатись меню
  const menuList = document.querySelector(`.menu-list.${category}`);
  menuList.innerHTML = ""; // Очищення списку перед відображенням нових страв

  // Вставлення даних про страви з вказаною категорією на сторінку
  menuData.forEach((dish) => {
    if (dish.category === category) {
      // Фільтрація страв за категорією
      const dishElement = document.createElement("div");
      dishElement.classList.add("dish");

      dishElement.innerHTML = `
        <div class="dish-photo">
          <img src="${dish.photo}" alt="${dish.name}" />
        </div>
        <div class="dish-description">
          <div class="dish-name"><h3>${dish.name}</h3></div>
          <div class="dish-ingredients">${dish.ingredients.join(", ")}</div>
        </div>
        <div class="price">${dish.price}</div>
      `;

      menuList.appendChild(dishElement);
    }
  });
}

// Виклик функції для відображення страв з певною категорією після завантаження сторінки
displayMenuByCategory("main"); // Відображення страви з категорії "main"
displayMenuByCategory("dessert"); // Відображення страви з категорії "dessert"
displayMenuByCategory("drinks"); // Відображення напоїв з категорії "drinks"
