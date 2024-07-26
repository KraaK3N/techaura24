document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        contents.forEach(content => content.classList.remove('active'));
        document.getElementById(tab.getAttribute('data-target')).classList.add('active');
      });
    });
  
    // Default to showing the first tab
    contents[0].classList.add('active');
  });
  