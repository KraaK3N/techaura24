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
          <h2>Mr & Miss Techaura</h2>
          <img class="event_guidelines" src="../static/images/guidelines/mr and miss techaura guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/mNrLbEjqSG2Td7QX6" target="_blank" class="button-link">Register</a>
        `;
      case 'gevent2':
        return `
          <h2>Voice of Techaura</h2>
          <img class="event_guidelines" src="../static/images/guidelines/voice of techaura guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/c7mCQCKPr9fhVRuV6" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent3':
        return `
          <h2>Battle Of Bands</h2>
          <img class="event_guidelines" src="../static/images/guidelines/battle of bands guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/RvRVEfM5oHrdTQmM7" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent4':
        return `
         <h2>Model Presentation</h2>
          <img class="event_guidelines" src="../static/images/guidelines/model presentation guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/QSdCimehhLoD5tSy6" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent5':
        return `
         <h2>Painting</h2>
          <img class="event_guidelines" src="../static/images/guidelines/painting guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/NohM42xNK89tuaWs7" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent6':
        return `
         <h2>Photography </h2>
          <img class="event_guidelines" src="../static/images/guidelines/Photography guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/E6xokesiXy7EJj6DA" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent7':
        return `
          <h2>Mental Math</h2>
          <img class="event_guidelines" src="../static/images/guidelines/mental math guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/zGsveswVT3onK7Jx6" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent8':
        return `
          <h2>Spelling Bee</h2>
          <img class="event_guidelines" src="../static/images/guidelines/Spelling bee guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/BDGSyhZxvargTrkc9" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent9':
        return `
         <h2>Truss Bridge</h2>
          <img class="event_guidelines" src="../static/images/guidelines/truss bridge guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/sp7yKVfRQYchogP69" target="_blank" class="button-link">Register</a>
        `;
        case 'gevent10':
        return `
         <h2>Recycle Fashion</h2>
          <img class="event_guidelines" src="../static/images/guidelines/recycled fashion guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/vq5xrVR6N3TsJZ7KA" target="_blank" class="button-link">Register</a>
        `;
        case 'devent1':
        return `
          <h2>DIY Gun Making</h2>
          <img class="event_guidelines" src="../static/images/guidelines/gun making guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/fG26f4Cy4cgYkAXP7" target="_blank" class="button-link">Register</a>
        `;
        case 'devent2':
        return `
          <h2>Bio Lab</h2>
          <img class="event_guidelines" src="../static/images/guidelines/biolab guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/t3a1dJ6shbqENTa69" target="_blank" class="button-link">Register</a>
        `;
        case 'devent3':
        return `
          <h2>Code War</h2>
          <img class="event_guidelines" src="../static/images/guidelines/codewars guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/D4v7PNWbWXYNpE8G7" target="_blank" class="button-link">Register</a>
        `;
        case 'devent4':
        return `
          <h2>Mud Race (Robotics)</h2>
          <img class="event_guidelines" src="../static/images/guidelines/mud race guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/EgvemoyScj3KWp41A" target="_blank" class="button-link">Register</a>
        `;
        case 'devent5':
        return `
          <h2>PPT Presentation</h2>
          <img class="event_guidelines" src="../static/images/guidelines/ppt guide.jpeg">
          <p>For more details click below</p>
          <a href="https://forms.gle/rraNpXEXR2kQvvFU6" target="_blank" class="button-link">Register</a>
        `;
        case 'esevent1':
        return `
          <h2>MLBB</h2>
          <img class="event_guidelines" src="../static/images/guidelines/mlbb guide.jpeg">
          <p>NOTE:   The qualifier rounds will be conducted online, while only the final round will take place at the venue.</p>
          <p>For more details click below</p>
          <a href="https://forms.gle/UwFnu1xcKggLrgkAA" target="_blank" class="button-link">Register</a>
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