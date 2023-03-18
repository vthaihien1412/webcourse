/**
 * Fixing capitalization
 * In this exercise, we have the names of cities in the United Kingdom, but the capitalization is all messed up. We want you to change them so that they are all lowercase, except for a capital first letter. A good way to do this is to:
 *
 * Convert the whole of the string contained in the city variable to lowercase and store it in a new variable.
 * Grab the first letter of the string in this new variable and store it in another variable.
 * Using this latest variable as a substring, replace the first letter of the lowercase string with the first letter of the lowercase string changed to upper case. Store the result of this replacement procedure in another new variable.
 * Change the value of the result variable to equal to the final result, not the city.
 */

const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
const output = [];

for (const city of cities) {
    // write your code just below here
    const lowercaseCity = city.toLowerCase();
    const firstLetter = city[0].toUpperCase();
    const formattedCityName = lowercaseCity.replace(lowercaseCity[0], firstLetter);
    output.push(formattedCityName);
}

console.log(output);
