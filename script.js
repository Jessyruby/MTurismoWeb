const sections = document.querySelectorAll('.hidden');

function handleScroll() {
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Adiciona a classe 'show' se a seção estiver visível
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


function selecao(circleNum) {

    if(circleNum == 1) {
        document.querySelector('#circle1').style.background = '#fc9a30'
    } else {
        document.querySelector('#circle1').style.background = '#D9D9D9'
    }
    
    if(circleNum == 2) {
        document.querySelector('#circle2').style.background = '#fc9a30'
    } else {
        document.querySelector('#circle2').style.background = '#D9D9D9'
    }

    if(circleNum == 3) {
        document.querySelector('#circle3').style.background = '#fc9a30'
    } else {
        document.querySelector('#circle3').style.background = '#D9D9D9'
    }
}

