// Generate a random integer between min and max, inclusive
// For example, randint(3, 18) will return a number that may be as low as 3 or
// as high as 18.
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

    // TODO: set first name and last name

    ['str', 'dex', 'int', 'con', 'app', 'pow'].forEach(stat => {
        set(stat, randint(3, 18));
    });

    set('siz', randint(8, 18));
    set('edu', randint(6, 21));
    set('idea', c['int'] * 5);
    set('luck', c['pow'] * 5);
    set('know', Math.min(c['edu'] * 5, 99));
    let dmgBase = c['str'] + c['siz'];
    if (dmgBase <= 12) {
        set('dmgb', '-1d6');
    } else if (dmgBase <= 16) {
        set('dmgb', '-1d4');
    } else if (dmgBase <= 24) {
        set('dmgb', '0');
    } else if (dmgBase <= 32) {
        set('dmgb', '1d4');
    } else {
        set('dmgb', '1d6');
    }

    set('hp', Math.round((c['con'] + c['siz']) / 2));
    set('mp', c['pow']);
    set('san', c['pow'] * 5);

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
    console.log('SIZ: ' + get('siz'));
    console.log('EDU: ' + get('edu'));
    console.log('IDEA: ' + get('idea'));
    console.log('LUCK: ' + get('luck'));
    console.log('KNOW: ' + get('know'));
    console.log('Damage bonus: ' + get('dmgb'));
    console.log('HP: ' + get('hp'));
    console.log('MP: ' + get('mp'));
    console.log('SAN: ' + get('san'));
}

print(generate());
