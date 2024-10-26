document.addEventListener('mousemove', function(e) {
	const background = document.querySelector('.background');
	const amountMovedX = (e.clientX / window.innerWidth * 30) - 15;
	const amountMovedY = (e.clientY / window.innerHeight * 30) - 15;
	background.style.transform = `translate(${amountMovedX}px, ${amountMovedY}px) scale(1.05)`;
});

function redirectTo(page) {
	console.log(`Redirecionando para: ${page}`);
	if (page === 'login') {
		window.location.href = 'login.html';  // Caminho correto para login.html
	} else if (page === 'register') {
		window.location.href = 'login.html';  // Caminho correto para register.html
	}
}