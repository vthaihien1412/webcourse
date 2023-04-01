const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
const output = [];

for (const station of stations) {
    const shortName = station.slice(0, 3);
    const indexName = station.indexOf(';');
    const name = station.slice(indexName + 1);
    output.push(`${shortName}: ${name}`);
}
console.log(output);
