let selectedPersona = '';
const defaultPersonaImage = 'images/persona-main.png';
let currentModel = 'llama'; // Define o modelo inicial como 'llama'

// JSON com as personas públicas
const defaultPublicPersonas = [
    {
        "name": "Rick Sanchez",
        "description": "Rick é extremamente inteligente, tendo criado muitos dispositivos que nunca existiram na Terra.",
        "image": "https://i.pinimg.com/474x/f3/58/49/f35849790b502ad1b9f4e4e49aa9c61d.jpg",
        "public": true
    },
    {
        "name": "Albert Einstein",
        "description": "Os talentos de Einstein ultrapassavam o campo das ciências exatas. Ele era pacifista e pensador.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/170px-Albert_Einstein_Head.jpg",
        "public": true
    },
    {
        "name": "Gandalf",
        "description": "Gandalf é frequentemente descrito em O Senhor dos Anéis como alguém pronto para se irritar, mas igualmente pronto para rir.",
        "image": "https://observatoriodocinema.uol.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=675&format=.jpg&quality=91&imagick=/wp-content/uploads/2023/07/gandalf-o-senhor-dos-aneis-branco-1536x866.jpg",
        "public": true
    },
    {
        "name": "Coringa",
        "description": "O personagem Coringa tem uma personalidade complexa, com comportamentos instáveis e uma tendência violenta.",
        "image": "https://aventurasnahistoria.com.br/media/uploads/hollywood/coringandndn_MFz2p1U.jpg",
        "public": true
    },
    {
        "name": "Angelina Jolie",
        "description": "Angelina Jolie é uma atriz, cineasta e humanitária americana, comumente citada como uma das atrizes mais bem pagas de Hollywood.",
        "image": "https://minhaseriefavorita.com.br/wp-content/uploads/2022/03/angelina-jolie.jpg.webp",
        "public": true
    },
    {
        "name": "Darth Vader",
        "description": "Darth Vader, personagem da saga Star Wars, é um ciborgue Sith implacável que serve ao Império Galáctico.",
        "image": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B0BDA09845AA575291C38D21E462571A6E07AC34899505FA6F6D615137B15EDF/scale?width=1200&aspectRatio=1.78&format=webp",
        "public": true
    }
];

// Função para inicializar personas públicas no localStorage
function initializePublicPersonas() {
    const personasInStorage = localStorage.getItem('personas_publicas');
    if (!personasInStorage) {
        localStorage.setItem('personas_publicas', JSON.stringify(defaultPublicPersonas));
        console.log('Personas públicas foram inicializadas no localStorage.');
    } else {
        console.log('Personas públicas já estão armazenadas no localStorage.');
    }
}

// Função para carregar o nome do usuário logado
function loadLoggedUser() {
    const loggedUser = localStorage.getItem('currentUser');
    const usernameElement = document.getElementById('username');
    if (loggedUser && usernameElement) {
        usernameElement.innerText = loggedUser;
    } else {
        console.warn('Nenhum usuário logado encontrado ou elemento #username ausente.');
    }
    loadPersonas(); // Carregar personas públicas
}

// Função para carregar personas do localStorage
function loadPersonas() {
    const personasData = localStorage.getItem('personas_publicas');
    const personas = personasData ? JSON.parse(personasData) : [];

    if (personas.length === 0) {
        console.warn('Nenhuma persona pública encontrada no localStorage.');
        displayPersonas([]); // Exibe mensagem de que não há personas disponíveis
    } else {
        console.log('Personas públicas carregadas:', personas);
        displayPersonas(personas);
    }
}

// Função para exibir personas na interface
function displayPersonas(personas) {
    const personaList = document.getElementById('personaList');
    if (!personaList) {
        console.error("Elemento 'personaList' não encontrado no DOM.");
        return;
    }

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

    const selectedPersonaNameElement = document.getElementById('selectedPersonaName');
    const selectedPersonaImageElement = document.getElementById('selectedPersonaImage');
    const personaDescriptionElement = document.getElementById('personaDescription');

    if (selectedPersonaNameElement) selectedPersonaNameElement.innerText = persona.name;
    if (selectedPersonaImageElement) {
        selectedPersonaImageElement.style.backgroundImage = `url(${persona.image || defaultPersonaImage})`;
        selectedPersonaImageElement.style.backgroundSize = 'cover';
    }
    if (personaDescriptionElement) personaDescriptionElement.innerText = persona.description || 'Descrição não disponível.';
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
    const apiKey = 'substitua-sua-api-key'; // Substitua pela sua chave da OpenAI
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
    initializePublicPersonas(); // Inicializa as personas públicas
    loadLoggedUser();           // Carrega o usuário logado
};