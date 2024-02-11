/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        var articleElement = document.createElement('article');

        var h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;

        var img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(img);

        templesElement.appendChild(articleElement);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    templeList = await response.json();
}

/* reset Function */
function reset () {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
function filterTemples (temples) {
    reset();
    var filter = document.querySelector('#filtered');

    switch (filter.value) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.log("Invalid filter option");
    }
}

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList)});
