
const navibar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


const navBuilder = () => {
    let navhtmltext = '';

    for (section of sections) {
        const createlist = document.createElement('li');
        const sectionnavname = section.dataset.nav;
        const selectsectionid = section.id;
        navhtmltext = `<a class="nav${selectsectionid}" href="#${selectsectionid}">${sectionnavname}</a>`;;
        navibar.appendChild(createlist);
        createlist.innerHTML = navhtmltext;
    }
};
navBuilder();


const sectionActivation = () => {
    for (section of sections) {
        const offset = Math.floor(section.getBoundingClientRect().top);
        inviewport = () => offset < 150 && offset >= -150;
        section.classList.remove('your-active-class');
        if (inviewport()) {
            section.classList.add('your-active-class');
        };
    }
}

//scroll function
function scroll(evt) {
    evt.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}

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


const options = {
    root: null,
    rootMargin: '0px',
    thresholds: 1.0
};

function selectId(idName) {
    return document.querySelector(`#${idName}`);
}
function selectClass(className) {
    return document.querySelector(`.${className}`);
}



document.querySelectorAll('a[href^="#"]').forEach(linka => { linka.addEventListener('click', scroll); });
window.addEventListener('scroll', sectionActivation);

//for additional navbar active status
const navlinks = { section1: selectClass('navsection1'), section2: selectClass('navsection2'), section3: selectClass('navsection3'), section4: selectClass('navsection4'), section5: selectClass('navsection5') };
const sectionsactnav = [selectId('section1'), selectId('section2'), selectId('section3'), selectId('section4'), selectId('section5')];

let observer = new IntersectionObserver(callback, options);
sectionsactnav.forEach((section) => observer.observe(section));

