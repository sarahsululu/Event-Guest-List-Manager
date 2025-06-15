document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('guest-form');
  const input = document.getElementById('guest-name');
  const list = document.getElementById('guest-list');
  const guestCountText = document.getElementById('guest-count');
  const categorySelect = document.getElementById('guest-category');

  let guestCount = 0;
  const MAX_GUESTS = 10;

  function updateGuestCount() {
  guestCountText.textContent = `Guests: ${guestCount} / ${MAX_GUESTS}`;
}

updateGuestCount();
  

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const guestName = input.value.trim();
    const guestCategory = categorySelect.value;
    if (!guestName) return;
    if (guestCount >= MAX_GUESTS) {
      alert('Guest list is full!');
      return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'flex justify-between items-center bg-gray-200 px-4 py-2 rounded mt-2';

    const guestText = document.createElement('span');
    guestText.textContent = guestName;
    guestText.className = 'mr-auto';

    const categoryText = document.createElement('span');
    categoryText.textContent = guestCategory;
    categoryText.className = 'text-sm text-gray-600';

    if (guestCategory === 'Friends') {
      categoryText.classList.add('text-brown-500');
    } else if (guestCategory === 'Family') {
      categoryText.classList.add('text-orange-500');
    } else if (guestCategory === 'Colleagues') {
      categoryText.classList.add('text-olive-500');
    }

    const rsvpButton = document.createElement('button');
    rsvpButton.textContent = 'Not Attending';
    rsvpButton.className = 'text-sm px-2 py-1 rounded ml-2 bg-red-400 text-white hover:bg-red-500';
    rsvpButton.addEventListener('click', function () {
      if (rsvpButton.textContent === 'Not Attending') {
        rsvpButton.textContent = 'Attending';
        rsvpButton.classList.remove('bg-red-400', 'hover:bg-red-500');
        rsvpButton.classList.add('bg-green-500', 'hover:bg-green-600');
      } else {
        rsvpButton.textContent = 'Not Attending';
        rsvpButton.classList.remove('bg-green-500', 'hover:bg-green-600');
        rsvpButton.classList.add('bg-red-400', 'hover:bg-red-500');
      }
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'bg-red-500 text-white px-2 py-1 rounded ml-2';
    removeButton.addEventListener('click', function () {
      listItem.remove();
      guestCount--;
    });

    listItem.appendChild(guestText);
    listItem.appendChild(rsvpButton);
    listItem.appendChild(removeButton);
    list.appendChild(listItem);

    guestCount++;
    input.value = '';
  });
});


  
