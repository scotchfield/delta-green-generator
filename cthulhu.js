// Generate a random integer between min and max, inclusive
// For example, randint(3, 18) will return a number that may be as low as 3 or
// as high as 18.
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maybeSet(d, key, value) {
    d[key] = d[key] || value;
}

// Generate a Call of Cthulhu character.
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

    ['str', 'dex', 'int', 'con', 'app', 'pow'].forEach(stat => {
        set(stat, randint(3, 18));
    });

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
    console.log('INT: ' + get('int'));
    console.log('CON: ' + get('con'));
    console.log('APP: ' + get('app'));
    console.log('POW: ' + get('pow'));
}

print(generate());
print(generate({ str: 3 }));
