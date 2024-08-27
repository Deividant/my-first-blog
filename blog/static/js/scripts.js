const carousel = document.querySelector('.carousel');
  const flexContainer = document.querySelector('.flex1');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  
  let currentIndex = 0;
  
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextButton.addEventListener('click', () => {
    const maxIndex = flexContainer.children.length - 1;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  function updateCarousel() {
    const translateX = -currentIndex * 100; // 100% é a largura de cada item
    flexContainer.style.transform = `translateX(${translateX}%)`;
    updateButtons(); // Chame a função para atualizar a visibilidade dos botões
  }
  
  // Desabilite os botões de navegação no início e no fim do carrossel
  function updateButtons() {
    const maxIndex = flexContainer.children.length - 1;
  
    if (currentIndex === 0) {
      prevButton.style.visibility = 'hidden'; // Ocultar o botão "Anterior"
    } else {
      prevButton.style.visibility = 'visible'; // Mostrar o botão "Anterior"
    }
  
    if (currentIndex === maxIndex) {
      nextButton.style.visibility = 'hidden'; // Ocultar o botão "Próximo" no final
    } else {
      nextButton.style.visibility = 'visible'; // Mostrar o botão "Próximo" em outros lugares
    }
  }
  
  updateCarousel();
  updateButtons();
  
  let btnMenu = document.getElementById('btn-menu')
  let menu = document.getElementById('menu-mobile')
  let overlay = document.getElementById('overlay-menu')
  btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
  })


 menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
  })
 overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
  })
  