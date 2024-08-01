document.addEventListener('DOMContentLoaded', function() {
  // Tab functionality
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      contents.forEach(content => content.classList.remove('active'));
      document.getElementById(tab.getAttribute('data-target')).classList.add('active');
    });
  });

  // Default to showing the first tab
  if (contents.length > 0) {
    contents[0].classList.add('active');
  }

  // Popup functionality
  const popupContainer = document.getElementById('popup-container');
  const viewDetailsButtons = document.querySelectorAll('.view-details-button');
  const closeButton = document.querySelector('.close-button');

  viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
      popupContainer.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', function() {
    popupContainer.style.display = 'none';
  });

  // Close the popup when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === popupContainer) {
      popupContainer.style.display = 'none';
    }
  });
});
