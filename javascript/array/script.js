const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping[0]);
shopping[0] = 'tahini';
console.log(shopping);

const random = ['tree', 795, [0, 1, 2]];
const randomArray = random[2];
const firstItem = randomArray[0];
console.log(firstItem);

// shorter
console.log(random[2][0]);



let birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));   //  2
console.log(birds.indexOf('Rabbit')); // -1


let cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push('Bradford', 'Brighton');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

// Add vo vi tri thu 1
cities = ['Manchester', 'Liverpool'];
cities.unshift('Edinburgh');
console.log(cities);     // [ "Edinburgh", "Manchester", "Liverpool" ]


// Remove
cities.pop();
console.log(cities);

// Remove the first item
cities.shift();
console.log(cities);

// Specific index
cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
let index = cities.indexOf('Liverpool');
if (index !== -1) {
    cities.splice(index, 1);
}
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]

cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
index = cities.indexOf('Liverpool');
if (index !== -1) {
    cities.splice(index, 2);
}
console.log(cities);     // [ "Manchester", "Carlisle" ]



birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
    console.log(bird);
}


const numbers = [5, 2, 7, 6];
let doubled = [];
// Way 1
// for (const number of numbers) {
//     const doubledNumber = number * 2;
//     doubled.push(doubledNumber);
// }
// Way 2
doubled = numbers.map(number => number * 2);
console.log(doubled);


function isLong(city) {
    return city.length > 8;
}
cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const longer = cities.filter(isLong);
console.log(longer);  // [ "Liverpool", "Edinburgh" ]



const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
cities = data.split(',');
console.log(cities);
const commaSeparated = cities.join('|');
console.log(commaSeparated);
console.log(cities.toString());
