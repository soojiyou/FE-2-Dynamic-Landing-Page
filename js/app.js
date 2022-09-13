
//functions

//make list and anchor
function makeLiandAnchorLink(arrli, linksource) {
    const ul = document.getElementById("navbar__list");

    for (i = 0; i <= arrli.length - 1; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<a href = "${linksource[i]}"> ${arrli[i]}</a>`;
        li.setAttribute('class', "nav-item");
        ul.appendChild(li);
        let lia = document.getElementsByTagName('a')[i];
        lia.setAttribute('class', `nav-link${i + 1}`);
    }

}

//help function
function selectClass(className) {
    return document.querySelector(`.${className}`);
}

function selectId(idName) {
    return document.querySelector(`#${idName}`);
}

//active function
function callback(target_sections) {
    target_sections.forEach((target_section) => {
        if (target_section.isIntersecting) {
            const navlink = navlinks[target_section.target.id];
            navlink.classList.add('active');
            Object.values(navlinks).forEach((link) => {
                if (link != navlink) {
                    link.classList.remove('active');
                }
            });
        }
    });
}

function sectionActivation() {

    sections.forEach(section => {
        const elementOffset = offset(section);
        inviewport = () => elementOffset < 150 && elementOffset >= -150;
        removeActive(section);
        addActive(inviewport(), section);
    });
};

//scroll function
function scroll(evt) {
    evt.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}

//code start
// build the nav

makeLiandAnchorLink(['Pomeranian', 'Appearance', 'Behavior', 'Health', 'History'], ['#section1', '#section2', '#section3', '#section4', '#section5'])

//call sections and navlinks to active nav


const sections = document.querySelectorAll('section');

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

const removeActive = (section) => {
    section.classList.remove('your-active-class');
};
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
    };
};


const sections2 = [selectId('section1'), selectId('section2'), selectId('section3'), selectId('section4'), selectId('section5')];

const navlinks = { section1: selectClass('nav-link1'), section2: selectClass('nav-link2'), section3: selectClass('nav-link3'), section4: selectClass('nav-link4'), section5: selectClass('nav-link5') };

const options = {
    root: null,
    rootMargin: '0px',
    thresholds: 1.0
};


let observer = new IntersectionObserver(callback, options);

sections2.forEach((section) => observer.observe(section));

//reach by scrolling when a nav link is clicked
document.querySelectorAll('a[href^="#"]').forEach(linka => { linka.addEventListener('click', scroll); });

window.addEventListener('scroll', sectionActivation);


