

  // Покращення слайдера
  const sliderImages = document.querySelectorAll('.image-slider img');
  const sliderText = document.querySelector('.slider-text');

  let currentSlide = 0;

  document.addEventListener('DOMContentLoaded', function () {
    const sliderText = document.querySelector('.slider-text');
  
    if (sliderText) {
      // Початковий текст слайду
      const initialText = {
        title: 'Welcome to Dolche FACTORY',
        description: 'Discover the finest desserts in town!'
      };
  
      // Текст для наведеного стану
      const hoverText = {
        title: 'Delicious Pies',
        description: 'Made with the finest ingredients'
      };
  
      // Встановлюємо початковий текст при завантаженні сторінки
      updateText(initialText);
  
      // Обробник події для наведення
      sliderText.addEventListener('mouseover', function () {
        // Змінюємо текст при наведенні
        updateText(hoverText);
      });
  
      // Обробник події для зняття наведення
      sliderText.addEventListener('mouseout', function () {
        // Повертаємо початковий текст
        updateText(initialText);
      });
    }
  
    function updateText(textObj) {
      // Змінюємо текст і застосовуємо клас для перехіду
      sliderText.querySelector('h1').textContent = textObj.title;
      sliderText.querySelector('p').textContent = textObj.description;
      sliderText.classList.add('animate-text');
      
      // Через 0.5 секунди видаляємо клас, щоб відбувся перехід
      setTimeout(function () {
        sliderText.classList.remove('animate-text');
      }, 500);
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
  const linksContent = document.querySelector('.links-content');

  // Перевіряємо, чи знайдено елемент
  if (linksContent) {
    // Додаємо стилізацію
    linksContent.style.borderBottom = '2px solid #FFA726'; // Додаємо підсвічування знизу
    linksContent.style.paddingBottom = '10px'; // Збільшуємо відступ знизу

    // Стилізація для посилань у .links-content
    const links = linksContent.querySelectorAll('a');
    links.forEach(link => {
      link.style.color = '#FFA726'; // Блідооранжевий колір тексту
      link.style.textDecoration = 'none'; // Відміна підкреслення
      link.style.marginRight = '15px'; // Зовнішній відступ між посиланнями
      link.style.fontFamily = 'Georgia, serif'; // Змінюємо шрифт
      link.style.fontSize = '18px'; // Розмір шрифту
      link.style.transition = 'color 0.3s'; // Плавний перехід кольору тексту

      // Додаємо ефект при наведенні на посилання
      link.addEventListener('mouseover', function () {
        link.style.color = '#FF7043'; // Зміна кольору тексту при наведенні
      });

      link.addEventListener('mouseout', function () {
        link.style.color = '#FFA726'; // Повернення початкового кольору тексту при знятті наведення
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const leftPicture = document.querySelector('.left-image');

  leftPicture.addEventListener('mouseover', function () {
    // Додаємо клас .hovered для зміни стилів при наведенні
    leftPicture.classList.add('hovered');
  });

  leftPicture.addEventListener('mouseout', function () {
    // Видаляємо клас .hovered при знятті наведення
    leftPicture.classList.remove('hovered');
  });
});

  
  
  
  
  
  