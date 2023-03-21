const birds = [ 'Parrots', 'Falcons', 'Eagles', 'Emus', 'Caracaras', 'Egrets' ];
eBirds = [];
indexEagles = birds.indexOf('Eagles');
birds.splice(indexEagles, 1);
for (const bird of birds) {
    if (bird.startsWith('E')) {
        eBirds.push(bird);
    }
}

console.log(eBirds);