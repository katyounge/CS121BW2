/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Kathryn Thompson";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = "2022";


// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;


// Step 5: declare and instantiate a variable to hold the name of your picture
let pictureLabel = "Kathryn Head Shot";

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', 'images/small headshot.jpg');
document.querySelector('img').setAttribute('alt', pictureLabel);





/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFoods = ["Indian food", "Spaghetti", "Broccoli", "Homemade Bread"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = favoriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFavorite = "Oysters";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(anotherFavorite);

// Step 5: repeat Step 2
document.querySelector("#food").textContent = favoriteFoods;

// Step 6: remove the first element in the favorite foods array
// my solution - favoriteFoods.splice(2, 1);
//teacher solution:
favoriteFoods.shift();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = favoriteFoods;

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop()

// Step 7: repeat Step 2
document.querySelector("#food").textContent = favoriteFoods;


