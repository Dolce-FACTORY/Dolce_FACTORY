

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
  
