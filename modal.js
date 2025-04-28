// Function to open the modal
function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.style.display = 'block';
  } else {
    console.error(`Modal with ID 'modal-${id}' not found.`);
  }
}

// Function to close the modal
function closeModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.style.display = 'none';
  } else {
    console.error(`Modal with ID 'modal-${id}' not found.`);
  }
}

// Function to change the main image in the modal
function changeModalImage(imageSrc, modalId) {
  const modalMainImage = document.querySelector(`#modal-${modalId} .modal-main-image`);
  if (modalMainImage) {
    modalMainImage.src = imageSrc;
  } else {
    console.error(`Main image element not found in modal '${modalId}'.`);
  }
}

// Dynamic event listener for thumbnails
document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnails img');
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (event) => {
      const imageSrc = event.target.src;
      const modal = event.target.closest('.modal');
      if (modal) {
        const modalId = modal.id.replace('modal-', '');
        changeModalImage(imageSrc, modalId);
      } else {
        console.error("Thumbnail does not belong to a modal.");
      }
    });
  });
});
