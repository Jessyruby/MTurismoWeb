const sections = document.querySelectorAll('.hidden');

function handleScroll() {
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < windowHeight && sectionBottom > 0) {
            section.classList.add('show');
        } else {
           
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', function() {
    let header = document.querySelector('#cabecalho')
    header.classList.toggle('rolagem', window.scrollY > 0)

    handleScroll()
});

handleScroll();

//////////////////////////////////////////////////////////////////////////////

const circles = document.querySelectorAll('.circle')
const buses = document.querySelectorAll('.bus')
const container = document.querySelector('.onibus')

circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    const targetBus = buses[index]
    const containerRect = container.getBoundingClientRect()
    const targetRect = targetBus.getBoundingClientRect()

    const offset = targetRect.left - containerRect.left + container.scrollLeft

    container.scrollTo({
      left: offset,
      behavior: 'smooth',
    })

    if(index == 0) {
        document.querySelector('#circle1').style.background = '#fc9a30'
    } else {
        document.querySelector('#circle1').style.background = '#D9D9D9'
    }
    
    if(index == 1) {
        document.querySelector('#circle2').style.background = '#fc9a30'
    } else {
        document.querySelector('#circle2').style.background = '#D9D9D9'
    }

    if(index == 2) {
        document.querySelector('#circle3').style.background = '#fc9a30'
    } else {
        document.querySelector('#circle3').style.background = '#D9D9D9'
    }

  })
})

function scrollToSection(id) {
    const element = document.querySelector(id);

    if (id == '.about' || id == '.servicos' || id == '.banner') {
        window.scrollTo({ 
            top: element.offsetTop - 100,
            behavior: 'smooth' 
        });
    } else {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
