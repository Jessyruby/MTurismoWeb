const sections = document.querySelectorAll('.hidden');

function handleScroll() {
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Adiciona a classe 'show' se a seção estiver visível (qualquer parte)
        if (sectionTop < windowHeight && sectionBottom > 0) {
            section.classList.add('show');
        } else {
            // Remove a classe 'show' se a seção sair completamente da viewport
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);

// Chamada inicial para verificar as seções já visíveis ao carregar a página
handleScroll();
