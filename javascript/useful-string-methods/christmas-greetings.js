const input = ['Happy Birthday!',
    'Merry christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for cHristmas',
    'Get well soon'];
const output = [];
for (const greeting of input) {
    if (greeting) {
        if (greeting.toLowerCase().includes('christmas')) {
            output.push(greeting);
        }
    }
}

console.log(output);
