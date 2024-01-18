// Скрытие открытых секций при щелчке на пункте навигации
var navItems = document.querySelectorAll('nav ul li a');

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function(event) {
    var target = document.querySelector(this.getAttribute('href'));
    var sections = document.querySelectorAll('section');

    for (var j = 0; j < sections.length; j++) {
      if (sections[j] !== target) {
        sections[j].style.display = 'none';
      }
    }

    target.style.display = 'block';
    event.preventDefault();
  });

  // Плавное изменение цвета текста при нажатии
  navItems[i].addEventListener('mouseover', function(event) {
    this.style.color = '#999'; // Измените цвет на желаемый серый тон
  });

  navItems[i].addEventListener('mouseout', function(event) {
    this.style.color = '#333'; // Измените цвет обратно на черный
  });
}
