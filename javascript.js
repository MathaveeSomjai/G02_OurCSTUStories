const stars = document.querySelectorAll('.star-input .star');
const ratingOutput = document.getElementById('output');

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const ratingValue = star.getAttribute('data-value');
    highlightStars(ratingValue, 'hovered');
  });

  star.addEventListener('mouseout', () => {
    removeHighlight('hovered');
  });

  star.addEventListener('click', () => {
    const ratingValue = star.getAttribute('data-value');
    document.getElementById('rating').value = ratingValue;
    highlightStars(ratingValue, 'selected');
    ratingOutput.innerText = `Rating is: ${ratingValue}/5`;
  });
});

// Function to highlight stars
function highlightStars(rating, className) {
  stars.forEach(star => {
    if (star.getAttribute('data-value') <= rating) {
      star.classList.add(className);
    } else {
      star.classList.remove(className);
    }
  });
}

// Function to remove a specific highlight class
function removeHighlight(className) {
  stars.forEach(star => {
    star.classList.remove(className);
  });
}

// Function to add the rating to the guest list
document.getElementById('guestform').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const rating = document.getElementById('rating').value;

  if (!rating) return; // Return if no rating selected

  // Create a new guest card
  const guestCard = document.createElement('div');
  guestCard.classList.add('guest-card');

  // Add guest info and rating
  guestCard.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Comment: ${comment}</p>
        <p class="guest-rating">${generateStars(rating)}</p>
      `;

  // Append the new guest card to the list
  document.getElementById('guestlist').appendChild(guestCard);

  // Clear the form
  document.getElementById('guestform').reset();
  removeHighlight('selected');
  ratingOutput.innerText = 'Rating is: 0/5';
});

// Function to generate star elements based on the rating value
function generateStars(rating) {
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    starsHtml += `<span class="star-output">${i <= rating ? '★' : '☆'}</span>`;
  }
  return starsHtml;
}