const skills = {
    'Accounting': 10,
    'Alertness': 20,
    'Anthropology': 0,
    'Archeology': 0,
    'Art': 0,
    'Artillery': 0,
    'Athletics': 30,
    'Bureaucracy': 10,
    'Computer Science': 0,
    'Craft': 0,
    'Criminology': 10,
    'Demolotions': 0,
    'Disguise': 10,
    'Dodge': 30,
    'Drive': 20,
    'Firearms': 20,
    'First Aid': 10,
    'Forensics': 0,
    'Heavy Machinery': 10,
    'Heavy Weapons': 0,
    'History': 10,
    'HUMINT': 10,
    'Law': 0,
    'Medicine': 0,
    'Melee Weapons': 30,
    'Military Science': 0,
    'Navigate': 10,
    'Occult': 10,
    'Persuade': 20,
    'Pharmacy': 0,
    'Pilot': 0,
    'Psychotherapy': 10,
    'Ride': 10,
    'Science': 0,
    'Search': 20,
    'SIGINT': 0,
    'Stealth': 10,
    'Surgery': 0,
    'Survival': 10,
    'Swim': 20,
    'Unarmed Combat': 40,
    'Unnatural': 0,
};

// Generate a random integer between min and max, inclusive
// For example, randint(3, 18) will return a number that may be as low as 3 or
// as high as 18.
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Roll 4d6, drop the lowest roll, and add the best three.
function fourDeeSixBest() {
    const rolls = [
        randint(1, 6),
        randint(1, 6),
        randint(1, 6),
        randint(1, 6),
    ];

    rolls.sort();

    return rolls[1] + rolls[2] + rolls[3];
}

// Generate a Delta Green character.
// Accepts an optional dictionary argument which can supply default values.
// Some values will be overwritten regardless. For example, attributes such as
// idea or luck depend on existing values, and will be overwritten if needed.
// Returns an object with properties corresponding to elements in the
// character sheet.
function generate(defaultCharacter) {
    const c = defaultCharacter || {};

    // Define a helper function so we only set values in c iff the property is
    // not already assigned a value.
    const set = function(key, value) {
        c[key] = c[key] || value;
    };

    // TODO: set first name and last name

    ['str', 'dex', 'con', 'int', 'pow', 'cha'].forEach(stat => {
        set(stat, fourDeeSixBest());
    });

    set('hp', Math.ceil((c['str'] + c['con']) / 2));
    set('wp', c['pow']);
    set('san', c['pow'] * 5);
    set('bp', c['san'] - c['pow']);

    set('skills', {});
    Object.keys(skills).forEach(skill => {
        c['skills'][skill] = c['skills'][skill] || skills[skill];
    })

    return c;
}

function print(character) {
    const get = function(key) {
        return character[key] || String(key);
    }

    console.log('* Character: ' + get('firstName') + ' ' + get('lastName'));
    console.log('** Attributes')
    console.log('\tSTR: ' + get('str'));
    console.log('\tDEX: ' + get('dex'));
    console.log('\tCON: ' + get('con'));
    console.log('\tINT: ' + get('int'));
    console.log('\tPOW: ' + get('pow'));
    console.log('\tCHA: ' + get('cha'));
    console.log('\tHP: ' + get('hp'));
    console.log('\tWP: ' + get('wp'));
    console.log('\tSAN: ' + get('san'));
    console.log('\tBP: ' + get('bp'));
    console.log('** Skills');
    Object.keys(character['skills']).forEach(skill => {
        console.log('\t' + skill + ': ' + character['skills'][skill]);
    })
}

print(generate());
