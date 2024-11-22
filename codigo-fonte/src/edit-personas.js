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
    loadUserPersonasForEdit();
  } catch (error) {
    console.error('Erro ao obter o usuário logado do localStorage:', error);
  }
}


function loadUserPersonasForEdit() {
  try {
    const personasData = localStorage.getItem('personas');
    const personas = personasData ? JSON.parse(personasData) : [];
    const userPersonas = personas.filter(p => p.username === loggedUsername);
    const personaEditList = document.getElementById('personaEditList');

    if (userPersonas.length === 0) {
      personaEditList.innerHTML = '<p>Nenhuma persona encontrada.</p>';
      return;
    }

    personaEditList.innerHTML = ''; 

    userPersonas.forEach((persona, index) => {
      const personaDiv = document.createElement('div');
      personaDiv.classList.add('persona-item');
      personaDiv.innerHTML = `
        <div class="persona-details">
          <img src="${persona.image}" alt="${persona.name}">
          <input type="text" value="${persona.name}" class="edit-input" id="name-${index}" />
          <input type="text" value="${persona.description}" class="edit-input" id="description-${index}" />
          <input type="text" value="${persona.image}" class="edit-input" id="image-${index}" />
        </div>
        <div class="edit-btns">
        <button onclick="togglePublicStatus('${persona.name}', ${persona.public})">
            ${persona.public ? 'Tornar Privado' : 'Tornar Público'}
          </button>
          <button onclick="savePersona('${persona.name}', ${index})">Salvar</button>
          <button onclick="deletePersona('${persona.name}')">Excluir</button>
        </div>
      `;
      personaEditList.appendChild(personaDiv);
    });
  } catch (error) {
    console.error('Erro ao carregar personas:', error);
    document.getElementById('personaEditList').innerHTML = '<p>Erro ao carregar personas. Tente novamente mais tarde.</p>';
  }
}


function savePersona(originalName, index) {
  try {
    const personasData = localStorage.getItem('personas');
    const personas = personasData ? JSON.parse(personasData) : [];

    const name = document.getElementById(`name-${index}`).value;
    const description = document.getElementById(`description-${index}`).value;
    const image = document.getElementById(`image-${index}`).value;

    const personaIndex = personas.findIndex(p => p.name === originalName && p.username === loggedUsername);
    if (personaIndex > -1) {
      personas[personaIndex] = { ...personas[personaIndex], name, description, image };
      localStorage.setItem('personas', JSON.stringify(personas));
      alert('Persona atualizada com sucesso!');
      loadUserPersonasForEdit();
    } else {
      alert('Erro: Persona não encontrada.');
    }
  } catch (error) {
    console.error('Erro ao salvar persona:', error);
    alert('Erro ao salvar persona. Tente novamente mais tarde.');
  }
}


function togglePublicStatus(personaName, currentStatus) {
  try {
    const personasData = localStorage.getItem('personas');
    const personas = personasData ? JSON.parse(personasData) : [];

    const personaIndex = personas.findIndex(p => p.name === personaName && p.username === loggedUsername);
    if (personaIndex > -1) {
      personas[personaIndex].public = !currentStatus;
      localStorage.setItem('personas', JSON.stringify(personas));
      alert('Status da persona atualizado com sucesso!');
      loadUserPersonasForEdit();
    } else {
      alert('Erro: Persona não encontrada.');
    }
  } catch (error) {
    console.error('Erro ao atualizar status da persona:', error);
    alert('Erro ao atualizar status. Tente novamente mais tarde.');
  }
}


function deletePersona(personaName) {
  const confirmation = confirm(`Tem certeza que deseja excluir a persona "${personaName}"?`);
  if (!confirmation) return;

  try {
    const personasData = localStorage.getItem('personas');
    const personas = personasData ? JSON.parse(personasData) : [];

    const updatedPersonas = personas.filter(p => !(p.name === personaName && p.username === loggedUsername));
    localStorage.setItem('personas', JSON.stringify(updatedPersonas));

    alert('Persona excluída com sucesso!');
    loadUserPersonasForEdit();
  } catch (error) {
    console.error('Erro ao excluir persona:', error);
    alert('Erro ao excluir persona. Tente novamente mais tarde.');
  }
}

window.onload = getLoggedUser;
