document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-btn');

  // Função para fechar todos os modais e remover a classe 'active'
  const closeAllModals = () => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
  };

  // Adiciona evento de clique para cada item do menu
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // Impede que o link recarregue a página
      closeAllModals(); // Fecha qualquer modal que esteja aberto

      const targetId = item.getAttribute('data-target');
      const targetModal = document.getElementById(targetId);

      if (targetModal) {
        targetModal.style.display = 'block'; // Mostra o modal
        item.classList.add('active'); // Adiciona a classe 'active' ao item do menu clicado
      }
    });
  });

  // Adiciona evento de clique para os botões de fechar
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Fecha o modal se o usuário clicar fora do conteúdo
  window.addEventListener('click', (event) => {
    modals.forEach(modal => {
      if (event.target === modal) {
        closeAllModals();
      }
    });
  });
});