const customName = document.getElementById('customname');
const randomizeButton = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — insertx weighs 300 pounds, and it was a hot day.\n';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);
let newStory = storyText.replaceAll('insertx', xItem)
    .replace('inserty', yItem)
    .replace('insertz', zItem);
randomizeButton.addEventListener('click', result);

function result() {

    if (customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14) + " stone";
        const temperature = Math.round((94 - 32) * 0.5556) + " centigrade";
        newStory = newStory.replace('300 pounds', weight)
            .replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
