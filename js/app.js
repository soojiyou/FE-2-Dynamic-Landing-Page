

function makeLiandAnchorLink(arrli, linksource) {
    const ul = document.getElementById("navbar__list");

    for (i = 0; i <= arrli.length - 1; i++) {
        let li = document.createElement('li');
        //li.setAttribute('data-section', `${i + 1}`);
        //li.innerHTML = `${arrli[i]}`;
        li.innerHTML = `<a href = "${linksource[i]}"> ${arrli[i]}</a>`;
        //li.setAttribute('id', `list${i + 1}`);
        li.setAttribute('class', "nav-item");
        ul.appendChild(li);
        let lia = document.getElementsByTagName('a')[i];
        lia.setAttribute('class', `nav-link${i + 1}`);
    }
    // let li0 = document.getElementsByTagName('a')[0];
    //li0.append('class', "active");
}


function selectClass(className) {
    return document.querySelector(`.${className}`);
}

function selectId(idName) {
    return document.querySelector(`#${idName}`);
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

function scroll(evt) {
    evt.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}

// build the nav

makeLiandAnchorLink(['Pomeranian', 'Appearance', 'Behavior', 'Health', 'History'], ['#section1', '#section2', '#section3', '#section4', '#section5'])


// Add class 'active' to section when near top of viewport


const sections = [selectId('section1'), selectId('section2'), selectId('section3'), selectId('section4'), selectId('section5')];

const navlinks = { section1: selectClass('nav-link1'), section2: selectClass('nav-link2'), section3: selectClass('nav-link3'), section4: selectClass('nav-link4'), section5: selectClass('nav-link5') };

const options = {
    root: null,
    rootMargin: '0px',
    thresholds: 1.0
};


let observer = new IntersectionObserver(callback, options);

sections.forEach((section) => observer.observe(section));

//scroll
document.querySelectorAll('a[href^="#"]').forEach(linka => { linka.addEventListener('click', scroll); });

