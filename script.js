const canvasEl = document.getElementById('quote-canvas');
const ctx = canvasEl.getContext('2d');
const quoteEl = document.getElementById('quote-text');
const authorEl = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const overlayEl = document.getElementById('quote-overlay');

const quotesApi = 'https://api.quotable.io/random';
const placeholderImageUrl = 'https://source.unsplash.com/1000x700/?nature';

function generateQuote() {
  // Show loading message and hide elements
  overlayEl.style.opacity = 1;
  quoteEl.textContent = 'Generating...';
  authorEl.textContent = '';
  generateBtn.style.opacity = 0;

  fetch(quotesApi)
    .then(response => response.json())
    .then(data => {
      const imageUrl = `https://api.unsplash.com/search/photos?query=${data.tags[0]}&client_id=wj2kkGzL895xH76cJZX_NOp73RSb8P2Top1B-52ZF50`;
      fetch(imageUrl)
        .then(response => response.json())
        .then(imageResponse => {
          const image = new Image();
          image.onload = function() {
            // Draw new image and update text
            ctx.drawImage(image, 0, 0, canvasEl.width, canvasEl.height);
            quoteEl.textContent = data.content;
            authorEl.textContent = `- ${data.author}`;

            // Apply centering styles
            quoteEl.style.top = '50%';
            quoteEl.style.transform = 'translateY(-50%)';
            authorEl.style.top = '75%';
            authorEl.style.transform = 'translateY(-50%)';

            // Hide overlay and show updated elements
            overlayEl.style.opacity = 1;
            quoteEl.style.opacity = 1;
            authorEl.style.opacity = 1;
            generateBtn.style.opacity = 1;
          };
          image.src = imageResponse.results[0].urls.regular;
        })
        .catch(error => {
          console.warn('No image found for this quote, using placeholder');
          const placeholderImage = new Image();
          placeholderImage.onload = function() {
            ctx.drawImage(placeholderImage, 0, 0, canvasEl.width, canvasEl.height);
            overlayEl.style.opacity = 0;
          };
          placeholderImage.src = placeholderImageUrl;
        });
    })
    .catch(error => console.error(error));
}

// Fetch and display initial quote and image
fetch(quotesApi)
  .then(response => response.json())
  .then(data => {
    const imageUrl = `https://api.unsplash.com/search/photos?query=${data.tags[0]}&client_id=wj2kkGzL895xH76cJZX_NOp73RSb8P2Top1B-52ZF50`;
    fetch(imageUrl)
      .then(response => response.json())
      .then(imageResponse => {
        const image = new Image();
        image.onload = function() {
          // Draw new image and update text
          ctx.drawImage(image, 0, 0, canvasEl.width, canvasEl.height);
          quoteEl.textContent = data.content;
          authorEl.textContent = `- ${data.author}`;

          // Dynamically adjust button position based on quote size
          const quoteHeight = quoteEl.clientHeight + authorEl.clientHeight;
          generateBtn.style.marginTop = `${quoteHeight + 20}px`;

          // Apply centering styles
          quoteEl.style.top = '50%';
          quoteEl.style.transform = 'translateY(-50%)';
          authorEl.style.top = '75%';
          authorEl.style.transform = 'translateY(-50%)';

          // Hide overlay and show updated elements
          overlayEl.style.opacity = 0;
          quoteEl.style.opacity = 1;
          authorEl.style.opacity = 1;
          generateBtn.style.opacity = 1;
        };
        image.src = imageResponse.results[0].urls.regular;
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));

  generateBtn.addEventListener('click', generateQuote);

  // Fetch and display initial quote and image
  fetch(quotesApi)
    .then(response => response.json())
    .then(data => {
      const imageUrl = `https://api.unsplash.com/search/photos?query=${data.tags[0]}&client_id=wj2kkGzL895xH76cJZX_NOp73RSb8P2Top1B-52ZF50`;
      fetch(imageUrl)
        .then(response => response.json())
        .then(imageResponse => {
          const image = new Image();
          image.onload = function() {
            // Draw new image and update text
            ctx.drawImage(image, 0, 0, canvasEl.width, canvasEl.height);
            quoteEl.textContent = data.content;
            authorEl.textContent = `- ${data.author}`;
  
            // Dynamically adjust button position based on quote size
            const quoteHeight = quoteEl.clientHeight + authorEl.clientHeight;
            generateBtn.style.marginTop = `${quoteHeight + 20}px`;
  
            // Apply centering styles
            quoteEl.style.top = '50%';
            quoteEl.style.transform = 'translateY(-50%)';
            authorEl.style.top = '75%';
            authorEl.style.transform = 'translateY(-50%)';
  
            // Hide overlay and show updated elements
            overlayEl.style.opacity = 0;
            quoteEl.style.opacity = 1;
            authorEl.style.opacity = 1;
            generateBtn.style.opacity = 1;
          };
          image.src = imageResponse.results[0].urls.regular;
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
  