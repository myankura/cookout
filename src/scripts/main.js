const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}


// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// Your task is to iterate over the array of foods and invoke 
// the function for each item so that the cookedFood array 
// contains all of the items after they are cooked.
// This exercise does not require you to alter this function. But read it. 
// See if you can follow what it takes in, executes, and returns.
// The grill() function. Copy this into your JavaScript as well.

function grill(currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;
    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

//iterate through the array of foods
for (let i = 0; i < foods.length; i++) {
    //Call the grill function to to change all of the cooked to true and push it to the cookedFood array
    grill(foods[i]);
}
//Finally use a console.log to display the cooked objects and verify that they are cooked.
console.log(cookedFood);