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

// Função para enviar mensagem para o LLaMA rodando localmente
const sendMessageToLLaMA = async (persona, message) => {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3',
                prompt: `Para melhor experiência do usuário, não informe que você é um modelo de linguagem, se comporte como a persona: ${persona} e responda: ${message}`,
                stream: false
            })
        });

        const data = await response.json();
        return { reply: data.response };
    } catch (error) {
        console.error('Erro ao se comunicar com o LLaMA:', error);
        return { error: 'Erro ao se comunicar com o LLaMA' };
    }
};

// Função para enviar mensagem para o GPT-4 usando a API da OpenAI
const sendMessageToGPT4 = async (persona, message) => {
    const apiKey = 'sk-ssEbHb_eBzwCnP8MUs1B70SgULa5Eeewvx9NO3fplHT3BlbkFJu1Jm03WKYenFU0Zg5-9xPMLVw4tkDvPg0krRyL9jcA'; // Substitua pela sua chave da OpenAI
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [
                    { role: 'system', content: `Se comporte como a persona ${persona}.` },
                    { role: 'user', content: message }
                ],
                max_tokens: 150
            })
        });

        const data = await response.json();
        return { reply: data.choices[0].message.content };
    } catch (error) {
        console.error('Erro ao se comunicar com o GPT-4:', error);
        return { error: 'Erro ao se comunicar com o GPT-4' };
    }
};

// Função para enviar mensagem e lidar com a resposta
async function sendMessage() {
    const messageInput = document.getElementById('userMessage');
    const message = messageInput.value.trim();
    const loadingIcon = document.getElementById('loadingIcon');
    const sendButton = document.querySelector('button');

    if (message === '' || selectedPersona === '') {
        alert('Por favor, selecione uma persona e digite uma mensagem.');
        return;
    }

    loadingIcon.style.display = 'inline-block'; // Exibe o ícone de loading
    sendButton.disabled = true;

    addMessageToChat('Você', message);
    messageInput.value = '';

    try {
        let reply;
        if (currentModel === 'llama') {
            reply = await sendMessageToLLaMA(selectedPersona, message);
        } else if (currentModel === 'gpt-4') {
            reply = await sendMessageToGPT4(selectedPersona, message);
        }

        if (reply.reply) {
            addMessageToChat(selectedPersona, reply.reply.trim()); // Exibe a resposta da persona
        } else {
            addMessageToChat(selectedPersona, 'Ocorreu um erro ao processar sua mensagem.');
        }
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        addMessageToChat(selectedPersona, 'Ocorreu um erro ao processar sua mensagem.');
    } finally {
        loadingIcon.style.display = 'none';
        sendButton.disabled = false;
    }
}

// Função para adicionar mensagem ao chat
function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'Você' ? 'user' : 'ai');
    messageDiv.innerText = `${sender}: ${message}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Rola automaticamente para a última mensagem
}

// Função para alternar entre GPT-4 e LLaMA
function changeModel() {
    const modelSelect = document.getElementById('modelSelect');
    currentModel = modelSelect.value === 'gpt-4' ? 'gpt-4' : 'llama';
    document.getElementById('model-name').innerText = modelSelect.options[modelSelect.selectedIndex].text;
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
