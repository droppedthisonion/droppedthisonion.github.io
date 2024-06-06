// Get all the desktop icons
const desktopIcons = document.querySelectorAll('.desktop-icon');

// Get all the windows
const windows = document.querySelectorAll('.window');

// Function to open a window
function openWindow(windowId) {
  const window = document.getElementById(windowId);
  window.style.display = 'block';
}

// Function to close a window
function closeWindow(windowId) {
  const window = document.getElementById(windowId);
  window.style.display = 'none';
}

// Function to minimize a window
function minimizeWindow(windowId) {
    const window = document.getElementById(windowId);
    
    if (window.classList.contains('zoomed')) {
      // Unzoom the window
      window.classList.remove('zoomed');
      window.style.width = window.dataset.originalWidth || '';
      window.style.height = window.dataset.originalHeight || '';
      window.style.top = window.dataset.originalTop || '';
      window.style.left = window.dataset.originalLeft || '';
      
      delete window.dataset.originalWidth;
      delete window.dataset.originalHeight;
      delete window.dataset.originalTop;
      delete window.dataset.originalLeft;
    }
}
function zoomWindow(windowId) {
    const window = document.getElementById(windowId);
    window.classList.toggle('zoomed');
    
    if (window.classList.contains('zoomed')) {
      window.style.width = '100%';
      window.style.height = '100%';
      window.style.top = '0';
      window.style.left = '0';
    } else {
      window.style.width = '';
      window.style.height = '';
      window.style.top = '';
      window.style.left = '';
    }
  }
// Add event listeners to desktop icons
desktopIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const windowId = icon.getAttribute('data-window') + '-window';
    openWindow(windowId);
  });
});

// Add event listeners to window buttons
windows.forEach(window => {
  const closeButton = window.querySelector('.close-button');
  const minimizeButton = window.querySelector('.minimize-button');
  const zoomButton = window.querySelector('.zoom-button');

  closeButton.addEventListener('click', () => {
    closeWindow(window.id);
  });

  minimizeButton.addEventListener('click', () => {
    minimizeWindow(window.id);
  });

  zoomButton.addEventListener('click', () => {
    zoomWindow(window.id);
  });
});

// Make windows draggable
windows.forEach(window => {
  const header = window.querySelector('.window-header');

  header.addEventListener('mousedown', () => {
    window.classList.add('dragging');
  });

  window.addEventListener('mouseup', () => {
    window.classList.remove('dragging');
  });

  window.addEventListener('mousemove', (event) => {
    if (window.classList.contains('dragging')) {
      const x = event.clientX;
      const y = event.clientY;
      window.style.left = `${x}px`;
      window.style.top = `${y}px`;
    }
  });
});