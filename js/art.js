function openModal(imgElement) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
  
    modalImage.src = imgElement.src;
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  