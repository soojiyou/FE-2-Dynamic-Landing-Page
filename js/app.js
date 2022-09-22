/*
//functions

//make list and anchor
// function makeLiandAnchorLink(arrli, linksource) {
//     const ul = document.getElementById("navbar__list");

//     for (i = 0; i <= arrli.length - 1; i++) {
//         let li = document.createElement('li');
//         li.innerHTML = `<a href = "${linksource[i]}"> ${arrli[i]}</a>`;
//         li.setAttribute('class', "nav-item");
//         ul.appendChild(li);
//         let lia = document.getElementsByTagName('a')[i];
//         lia.setAttribute('class', `nav-link${i + 1}`);
//     }

// }


// function makeLiandAnchorLink() {
//     const ul = document.getElementById("navbar__list");
//     const sections = Array.from(document.getElementsByTagName("section"));
//     for (section of sections) {
//         const listItem = document.createElement('li');
//         const listItemLink = document.createElement('a');
//         // use the section data-nav to fill the <a> tag
//         listItemLink.textContent = section.dataset.nav;
//         listItem.appendChild(listItemLink);
//         menu.appendChild(listItem);

//     }
// }

const navigation = document.getElementById('navbar__list');
//const sections = document.querySelectorAll('section');
const navBuilder = () => {

    let navUI = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigation
    navigation.innerHTML = navUI;


};



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

navBuilder();
//makeLiandAnchorLink(['Pomeranian', 'Appearance', 'Behavior', 'Health', 'History'], ['#section1', '#section2', '#section3', '#section4', '#section5'])

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



//const navlinks = { section1: selectClass('nav-link1'), section2: selectClass('nav-link2'), section3: selectClass('nav-link3'), section4: selectClass('nav-link4'), section5: selectClass('nav-link5') };

const options = {
    root: null,
    rootMargin: '0px',
    thresholds: 1.0
};


let observer = new IntersectionObserver(callback, options);

// const sections2 = [selectId('section1'), selectId('section2'), selectId('section3'), selectId('section4'), selectId('section5')];
// sections2.forEach((section) => observer.observe(section));

//reach by scrolling when a nav link is clicked
document.querySelectorAll('a[href^="#"]').forEach(linka => { linka.addEventListener('click', scroll); });

window.addEventListener('scroll', sectionActivation);

const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for (i = 0; i < sections; i++) {
                sections[i].addEventListener("click", sectionScroll(link));
            }
        });
    });

};

scrolling();*/




// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');



const navBuilder = () => {

    let navUI = '';
    // looping over all sections
    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link nav${sectionID}" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigation
    navigation.innerHTML = navUI;


};

navBuilder();

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
};
// adding the active class
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
    };
};

//implementating the actual function

const sectionActivation = () => {
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
document.querySelectorAll('a[href^="#"]').forEach(linka => { linka.addEventListener('click', scroll); });
window.addEventListener('scroll', sectionActivation);

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
//const navlinks = document.getElementsByClassName(`menu__link`);
/*
const sectionnum = document.querySelectorAll('section');
function makearray_id() {
    let arr_id = [];
    for (let i = 0; i < sectionnum.length; i++) {
        section_id = document.getElementById(`navsection${i + 1}`);
        arr_id.push(section_id[i]);
    }
    return arr_id;
}
function makearray_key() {
    let arr_key = [];
    for (let i = 0; i < sectionnum.length; i++) {
        section_key = document.getElementsByClassName(`navsection${i + 1}`);
        arr_key.push(section_key[i]);
    }
    return arr_key;
}
function navlinksf() {
    let arr1 = makearray_id();
    let arr2 = makearray_key();
    let dict = {};
    arr1.forEach((id, i) => dict[id] = arr2[i]);
    return dict;
}

navlinksf();
const navlinks = navlinksf();
*/

//help function


const options = {
    root: null,
    rootMargin: '0px',
    thresholds: 1.0
};


//sections.forEach((section) => observer.observe(section));
function selectId(idName) {
    return document.querySelector(`#${idName}`);
}
function selectClass(className) {
    return document.querySelector(`.${className}`);
}

const navlinks = { section1: selectClass('navsection1'), section2: selectClass('navsection2'), section3: selectClass('navsection3'), section4: selectClass('navsection4'), section5: selectClass('navsection5') };
const sections2 = [selectId('section1'), selectId('section2'), selectId('section3'), selectId('section4'), selectId('section5')];
let observer = new IntersectionObserver(callback, options);
sections2.forEach((section) => observer.observe(section));

