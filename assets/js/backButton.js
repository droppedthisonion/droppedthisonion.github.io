document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.createElement('a');
    backButton.href = 'index.html';
    backButton.className = 'back-button';
    backButton.style.position = 'fixed';
    backButton.style.top = '20px';
    backButton.style.right = '20px';
    backButton.style.zIndex = '9999';
    backButton.style.display = 'flex';
    backButton.style.flexDirection = 'column';
    backButton.style.alignItems = 'flex-end';
    backButton.style.textDecoration = 'none';
    backButton.style.color = '#fff';
  
    var img = document.createElement('img');
    img.src = 'assets/imgs/back.jpg';
    img.alt = 'Back to Landing Page';
    img.width = 300;
    img.height = 100;
  
    var span = document.createElement('span');
    span.className = 'button-text';
    span.textContent = 'Take me back';
  
    backButton.appendChild(img);
    backButton.appendChild(span);
  
    document.body.appendChild(backButton);
  });