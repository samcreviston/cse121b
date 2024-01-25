/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Sam Creviston";
let currentYear = "2023";
let profilePicture = "images/portrait-me3.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.getElementById("year");
let imageElement = document.querySelector("picture img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of ' + fullName);

/* Step 5 - Array */
let favoriteFoods = ['Toasted Ravioli', 'Breakfast Burritos', 'Apple Pie and Ice Cream', 'Donuts'];

foodElement.textContent = favoriteFoods;

// declare and add another food to the array
const otherFavorite = "Homemade Mac & Cheese";
favoriteFoods.push(otherFavorite);
foodElement.innerHTML += `<br>${favoriteFoods}`;

//remove first element
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

//remove last element
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;