document.getElementById('burgerMenu').addEventListener('click', function() {
  document.getElementById('dropdownMenu').classList.toggle('active');
  
 
  this.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header'); 
  
  if (!header) {
    console.error('Элемент header не найден! Проверьте селектор.');
    return;
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const trigger = document.getElementById('searchTrigger');
  const dropdown = document.getElementById('searchDropdown');
  const searchField = document.getElementById('searchField');
  
  trigger.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
    if (dropdown.classList.contains('active')) {
      searchField.focus();
    }
  });
  
  document.addEventListener('click', function() {
    dropdown.classList.remove('active');
  });
  
  dropdown.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  
  document.querySelector('.search-submit').addEventListener('click', function() {
    performSearch(searchField.value);
  });
  
  searchField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch(searchField.value);
    }
  });
  
  function performSearch(query) {
    if (query.trim()) {
      alert('Поиск: ' + query);
    }
  }
});