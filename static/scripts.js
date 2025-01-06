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
  const contentArea = document.querySelector('.content-area');

  viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
      const event = button.getAttribute('data-event');
      const eventContent = getEventContent(event);
      contentArea.innerHTML = eventContent;
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

  function getEventContent(event) {
    // Return the content for the specified event
    switch (event) {
      case 'gevent1':
        return `
          <h2>Event 1</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
      case 'gevent2':
        return `
          <h2>Event 2</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>castro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent3':
        return `
          <h2>Event 3</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent4':
        return `
          <h2>Event 4</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent5':
        return `
          <h2>Event 5</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent6':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent7':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent8':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent9':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent10':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'devent1':
        return `
          <h2>Event 1</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
      case 'devent2':
        return `
          <h2>Event 2</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>castro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'devent3':
        return `
          <h2>Event 3</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'devent4':
        return `
          <h2>Event 4</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'devent5':
        return `
          <h2>Event 5</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'devent6':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'devent7':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'devent8':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'devent9':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'devent10':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'esevent1':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'esevent2':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'esevent3':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'esevent4':
        return `
          <h2>Event 6</h2>
          <img src="https://via.placeholder.com/200x200" alt="Event 1 Image">
          <p>dontro dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet urna et orci vehicula varius.</p>
          <p>Curabitur sit amet justo vel erat vehicula sodales. Phasellus malesuada neque vel nibh interdum, nec laoreet risus cursus.</p>
          <a href="https://www.example.com" target="_blank" class="button-link">Register</a>
        `;
        case 'contactnos':
        return `
          <h3 class="contact_headers">Event Coordinator</h3>
          <p>Afreena : +91 9863565690 </p>
          <h3 class="contact_headers">Asst. Event Coordinator </h3>
          <p>Salangmongla : +91 9362793501</p>
        `;
      // Add more cases for each event
      default:
        return '';
    }
  }
});