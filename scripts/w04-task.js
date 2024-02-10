/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Sam Creviston",
    photo: "images/portrait-me3.JPG",
    favoriteFoods: ['Toasted Ravioli', 'Breakfast Burritos', 'Apple Pie and Ice Cream', 'Donuts'],
    hobbies: ['Photography', 'Hiking', 'Dungeons & Dragons'],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Ogden UT',
        length: '1 year'
    }
)

myProfile.placesLived.push(
    {
        place: 'Moses Lake, WA',
        length: '3 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Vancouver, WA',
        length: '6 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Atlanta, GA',
        length: '9 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Coeur D\'Alene, ID',
        length: '2 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Rexburg, ID',
        length: '1 year'
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.getElementById("photo");

photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(location => {
    let dt = document.createElement('dt');
    dt.textContent = location.place;

    let dd = document.createElement('dd');
    dd.textContent = location.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});