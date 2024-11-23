let loggedUsername = '';


function getLoggedUser() {
  try {
    const userData = localStorage.getItem('loggedUser');
    if (!userData) {
      console.error('Nenhum usuário logado encontrado.');
      return;
    }
    const parsedData = JSON.parse(userData);
    loggedUsername = parsedData.username;
  } catch (error) {
    console.error('Erro ao obter o usuário logado do localStorage:', error);
  }
}


function alertSuccess(message) {
    const alertBox = document.getElementById('alertSuccess');
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => alertBox.style.display = 'none', 3000);
  }

  function alertWarning(message) {
    const alertBox = document.getElementById('alertWarning');
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => alertBox.style.display = 'none', 3000);
  }


  document.addEventListener('mousemove', function(e) {
    const background = document.querySelector('.background');
    const amountMovedX = (e.clientX / window.innerWidth * 30) - 15;
    const amountMovedY = (e.clientY / window.innerHeight * 30) - 15;
    background.style.transform = `translate(${amountMovedX}px, ${amountMovedY}px) scale(1.05)`;
  });


  async function createPersona() {
    if (!loggedUsername) return;
    const owner = loggedUsername;
    const name = document.getElementById('personaName').value;
    const description = document.getElementById('personaDescription').value;
    const image = document.getElementById('personaImage').value || '/images/default.png';
    const isPublic = document.getElementById('personaPublic').checked; 

    if (!name || !description) {
      alertWarning('Por favor, preencha todos os campos obrigatórios.');
      return;
    }


  const persona = { name, owner, description, image, public: isPublic };

  const storedPersonas = JSON.parse(localStorage.getItem('personas')) || [];

  storedPersonas.push(persona);

  localStorage.setItem('personas', JSON.stringify(storedPersonas));

  alertSuccess('Persona criada com sucesso!');
  setTimeout(() => window.location.href = '/edit-personas.html', 2000); 
}