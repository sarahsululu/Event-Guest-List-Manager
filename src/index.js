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

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const guestName = input.value.trim();
    const guestCategory = categorySelect.value;

    if (!guestName) return;
    if (guestCount >= MAX_GUESTS) {
      alert('Guest list is full!');
      return;
    }

    const now = new Date();
    const timestamp = now.toLocaleTimeString();

    const listItem = document.createElement('li');
    listItem.className = 'flex justify-between items-center bg-gray-200 px-4 py-2 rounded mt-2';

    const infoContainer = document.createElement('div');
    infoContainer.className = 'flex flex-col mr-auto';

    const guestText = document.createElement('span');
    guestText.textContent = guestName;
    guestText.className = 'mr-auto font-semibold guest-name';

    const categoryText = document.createElement('span');
    categoryText.textContent = guestCategory;
    categoryText.className = 'text-sm text-gray-600';

    const timestampSpan = document.createElement('small');
    timestampSpan.textContent = `Added at: ${timestamp}`;
    timestampSpan.className = 'text-gray-500 text-xs';

    infoContainer.appendChild(guestText);
    infoContainer.appendChild(categoryText);
    infoContainer.appendChild(timestampSpan);

    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'flex items-center ml-auto space-x-2';


    const rsvpButton = document.createElement('button');
    rsvpButton.textContent = 'RSVP';
    rsvpButton.className = 'bg-green-500 text-white px-2 py-1 rounded text-xs';
    rsvpButton.addEventListener('click', () => {
      guestText.classList.toggle('text-green-600');
      rsvpButton.classList.toggle('bg-green-800');
      rsvpButton.textContent =
        rsvpButton.textContent === 'RSVP' ? 'Confirmed' : 'RSVP';
    });

    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'bg-yellow-400 text-white px-2 py-1 rounded text-xs';
    editButton.addEventListener('click', () => {
      const newName = prompt('Enter new guest name:', guestText.textContent);
      if (newName) {
        guestText.textContent = newName.trim();
      }
    });

    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'bg-red-500 text-white px-2 py-1 rounded text-xs';
    removeButton.addEventListener('click', () => {
      list.removeChild(listItem);
      guestCount--;
      updateGuestCount();
    });

    actionsContainer.appendChild(editButton);
    actionsContainer.appendChild(rsvpButton);
    actionsContainer.appendChild(removeButton);

    listItem.appendChild(infoContainer);
    listItem.appendChild(actionsContainer);

    list.appendChild(listItem);

    guestCount++;
    updateGuestCount();
    input.value = '';
    categorySelect.value = '';
  });

  updateGuestCount();
});



