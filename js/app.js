/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// function anchorlink(linksource) {

//     for (i = 0; i <= linksource.length - 1; i++) {
//         const li = document.getElementById(`list${i + 1}`);
//         //const anchor = document.createElement('a');
//         li.setAttribute('href', `${linksource[i]}`);
//         //li.append(anchor);
//         //li.innerHTML = `<a href="${linksource[i]}">${arrli[i]}</a>`;
//     }
// }

// function makeli(arrli) {
//     // const container = document.getElementsByClassName("navbar__menu");
//     const ul = document.getElementById("navbar__list");

//     for (i = 0; i <= arrli.length - 1; i++) {
//         const li = document.createElement('li');

//         li.innerHTML = arrli[i];
//         li.setAttribute('id', `list${i + 1}`)
//         ul.appendChild(li);
//     }
//     // container.appendChild(ul);

// }

function makeliandanchorlink(arrli, linksource) {
    const ul = document.getElementById("navbar__list");

    for (i = 0; i <= arrli.length - 1; i++) {
        const li = document.createElement('li');
        li.setAttribute('data-section', `${i}`);
        li.innerHTML = `<a href = "${linksource[i]}"> ${arrli[i]}</a>`;
        li.setAttribute('id', `list${i + 1}`);
        ul.appendChild(li);

    }

    li0 = document.getElementsByTagName('a')[0];
    li0.setAttribute('class', "active");
}

/////////////arrli = link///////
// function checkVisibleSection() {

//     var minor = window.innerHeight,
//         section = null;

//     //---Select the section closest to the top
//     [].forEach.call(sections, function (item) {

//         var offset = item.getBoundingClientRect();

//         if (Math.abs(offset.top) < minor) {

//             minor = Math.abs(offset.top);

//             section = item;

//         }

//     });
//     if (section) {
//         let index = section.data - section;
//         let link = nav.querySelector("li[data-section='" + index + "'] a");
//         if (!link.classList.contains("active")) {

//             //---Remove the active class
//             nav.querySelector("a.active").classList.remove("active");

//             //---Add the active class
//             link.classList.add("active");
//         }

//     }

// }


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav

makeliandanchorlink(['Pomeranian', 'Appearance', 'Behavior', 'Health', 'History'], ['#', '#', '#', '#', '#'])


// Add class 'active' to section when near top of viewport


// var nav = document.getElementById("navbar__list"),
//     sections = document.querySelectorAll(".landing__container"),
//     delay = null;

// //---Scroll logic
// document.addEventListener("scroll", function () {

//     if (!isNaN(delay)) { clearTimeout(delay); }

//     delay = setTimeout(checkVisibleSection, 100);

// });

// //---Check the visible section
// function checkVisibleSection() {

//     var minor = window.innerHeight,
//         section = null;

//     //---Select the section closest to the top
//     [].forEach.call(sections, function (item) {

//         var offset = item.getBoundingClientRect();

//         if (Math.abs(offset.top) < minor) {

//             minor = Math.abs(offset.top);

//             section = item;

//         }

//     });

//     //---If the section exists
//     if (section) {

//         var index = section.dataset.section,
//             link = nav.querySelector("[li[data-section='" + index + "'] a");

//         //---If the link is not already active
//         if (!link.classList.contains("active")) {

//             //---Remove the active class
//             nav.querySelector("a.active").classList.remove("active");

//             //---Add the active class
//             link.classList.add("active");

//         }

//     }

// }

// //---Click on buttons
// nav.addEventListener("click", function (evt) {

//     evt.preventDefault();

//     var link = evt.target;

//     if (link.nodeName.toLowerCase() === "a") {

//         var section = link.parentNode.dataset.section;

//         //---Remove the class of the active link
//         nav.querySelector("a.active").classList.remove("active");

//         //---Active the link
//         link.classList.add("active");

//         //---Scroll to the section
//         document.getElementById("section" + section).scrollIntoView();

//         document.body.scrollTop -= 30;

//     }

// });



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
