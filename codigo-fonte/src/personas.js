let selectedPersona = '';
const defaultPersonaImage = 'images/persona-main.png';
let currentModel = 'llama'; // Define o modelo inicial como 'llama'

// Função para carregar o nome do usuário logado
function loadLoggedUser() {
    const loggedUser = localStorage.getItem('currentUser');
    if (loggedUser) {
        document.getElementById('username').innerText = loggedUser;
        loadPersonas(); // Carregar personas públicas
    } else {
        alert('Nenhum usuário logado. Redirecionando...');
        window.location.href = 'login.html'; // Redireciona para a página de login
    }
}

// Função para carregar personas do localStorage ou de um arquivo JSON
function loadPersonas() {
    let personas = JSON.parse(localStorage.getItem('personas_publicas'));

    if (!personas || personas.length === 0) {
        // Carrega o arquivo personas_publicas.json
        fetch('personas_publicas.json')
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('personas_publicas', JSON.stringify(data));
                displayPersonas(data);
            })
            .catch(error => console.error('Erro ao carregar personas:', error));
    } else {
        displayPersonas(personas);
    }
}

// Função para exibir personas na interface
function displayPersonas(personas) {
    const personaList = document.getElementById('personaList');
    personaList.innerHTML = '';

    if (personas.length > 0) {
        personas.forEach(persona => displayPersona(persona, personaList));
    } else {
        personaList.innerHTML = '<p>Nenhuma persona disponível no momento.</p>';
    }
}

// Função para exibir cada persona na lista
function displayPersona(persona, container) {
    const personaWrapper = document.createElement('div');
    personaWrapper.classList.add('persona-wrapper');

    const circle = document.createElement('div');
    circle.classList.add('persona-circle');

    const img = document.createElement('img');
    img.src = persona.image || 'images/default-persona.png';
    img.alt = persona.name;
    img.classList.add('persona-image');

    const name = document.createElement('div');
    name.classList.add('persona-name');
    name.textContent = persona.name;

    circle.appendChild(img);
    personaWrapper.appendChild(circle);
    personaWrapper.appendChild(name);

    personaWrapper.onclick = () => selectPersona(persona);

    container.appendChild(personaWrapper);
}

// Função para selecionar uma persona e exibir sua descrição
function selectPersona(persona) {
    selectedPersona = persona.name;
    document.getElementById('selectedPersonaName').innerText = persona.name;
    document.getElementById('selectedPersonaImage').style.backgroundImage = `url(${persona.image || defaultPersonaImage})`;
    document.getElementById('selectedPersonaImage').style.backgroundSize = 'cover';
    document.getElementById('personaDescription').innerText = persona.description || 'Descrição não disponível.';
}

// Outras funções
function createNewPersona() { window.location.href = 'create-persona.html'; }
function accessUserPersonas() { window.location.href = 'user-personas.html'; }
function handleKeyPress(event) { if (event.key === 'Enter') sendMessage(); }
function logoutUser() { localStorage.removeItem('currentUser'); window.location.href = 'index.html'; }

// Inicialização
window.onload = function() {
    loadLoggedUser();
};
