function intensifyFloatEffect() {
    const username = document.getElementById('username').value.length;
    const password = document.getElementById('password').value.length;
    const logo = document.getElementById('logo');

    const totalLength = username + password;
    let animationDuration = 10 - Math.min(totalLength / 3, 6);
    logo.style.animationDuration = `${animationDuration}s`;
}

document.addEventListener('mousemove', function(e) {
    const background = document.querySelector('.background');
    const amountMovedX = (e.clientX / window.innerWidth * 30) - 15;
    const amountMovedY = (e.clientY / window.innerHeight * 30) - 15;
    background.style.transform = `translate(${amountMovedX}px, ${amountMovedY}px) scale(1.05)`;
});

document.querySelector('.overlay').addEventListener('click', function() {
    window.location.href = 'index.html';
});

let isRegistering = false;


function toggleRegister() {
    const emailField = document.getElementById('email');
    const registerButton = document.querySelector('.btn-register');
    const loginButton = document.querySelector('.btn-login');

    if (!isRegistering) {
        emailField.style.display = 'block';
        registerButton.innerText = 'FINALIZAR CADASTRO';
        loginButton.style.display = 'none';
        isRegistering = true;
    } else {
        register();
    }
}


function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Por favor, preencha todos os campos de login.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username);

    if (!user) {
        alert('Usuário não encontrado.');
        return;
    }

    
    if (user.password !== password) {
        alert('Senha incorreta.');
        return;
    }

    
    localStorage.setItem('currentUser', username);
    alert('Login bem-sucedido! Redirecionando...');
    window.location.href = 'personas.html'; 
}


function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (!username || !password || !email) {
        alert('Por favor, preencha todos os campos para realizar o cadastro.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    if (users.find(u => u.username === username)) {
        alert('Usuário já existe.');
        return;
    }

    
    users.push({ username, password, email });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Cadastro realizado com sucesso!');
    resetToLogin();
}


function toggleButtonLoading(buttonClass, isLoading) {
    const button = document.querySelector(`.${buttonClass}`);
    const icon = button.querySelector('.loading-icon');

    if (isLoading) {
        button.classList.add('disabled', 'loading');
        icon.style.display = 'block';
    } else {
        button.classList.remove('disabled', 'loading');
        icon.style.display = 'none';
    }
}


function resetToLogin() {
    const emailField = document.getElementById('email');
    const registerButton = document.querySelector('.btn-register');
    const loginButton = document.querySelector('.btn-login');

    emailField.style.display = 'none';
    registerButton.innerText = 'CADASTRO';
    loginButton.style.display = 'block';
    isRegistering = false;

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
}
