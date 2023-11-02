
  // Function to add the modal-backdrop
function addModalBackdrop() {
    const modalBackdrop = document.createElement('div');
    modalBackdrop.setAttribute('modal-backdrop', '');
    modalBackdrop.classList.add('bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-40');
    document.body.appendChild(modalBackdrop);
  }
  
  // Function to remove the modal-backdrop
  function removeModalBackdrop() {
    const modalBackdrop = document.querySelector('div[modal-backdrop]');
    if (modalBackdrop) {
      modalBackdrop.remove();
    }
  }
  
  // Add an event listener to your "Open" button with the ID 'ope'
  const openButton = document.getElementById('ope');
  if (openButton) {
    openButton.addEventListener('click', () => {
      // Add the modal-backdrop when "Open" button is clicked
      addModalBackdrop();
    });
  }
  
  // Add an event listener to your "menu-s1" button
  const closeButton = document.getElementById('menu-s1');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      // Close the modal (your code to close the modal goes here)
  
      // After closing the modal, remove the modal-backdrop
      removeModalBackdrop();
    });
  }
  
  