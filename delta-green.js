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

    return c;
}

function print(character) {
    const get = function(key) {
        return character[key] || String(key);
    }

    console.log('* ' + get('firstName') + ' ' + get('lastName'));
    console.log('---------------------------------');
    console.log('STR: ' + get('str'));
    console.log('DEX: ' + get('dex'));
    console.log('CON: ' + get('con'));
    console.log('INT: ' + get('int'));
    console.log('POW: ' + get('pow'));
    console.log('CHA: ' + get('cha'));
    console.log('HP: ' + get('hp'));
    console.log('WP: ' + get('wp'));
    console.log('SAN: ' + get('san'));
    console.log('BP: ' + get('bp'));
}

print(generate());
