// Lists are from https://github.com/dariusk/corpora ❤️
const firstNames = [
    "Aaliyah", "Aaron", "Abby", "Abigail", "Abraham", "Adam", "Addison", "Adrian", "Adriana", "Adrianna", "Aidan", "Aiden", "Alan", "Alana", "Alejandro", "Alex", "Alexa", "Alexander", "Alexandra", "Alexandria", "Alexia", "Alexis", "Alicia", "Allison", "Alondra", "Alyssa", "Amanda", "Amber", "Amelia", "Amy", "Ana", "Andrea", "Andres", "Andrew", "Angel", "Angela", "Angelica", "Angelina", "Anna", "Anthony", "Antonio", "Ariana", "Arianna", "Ashley", "Ashlyn", "Ashton", "Aubrey", "Audrey", "Austin", "Autumn", "Ava", "Avery", "Ayden", "Bailey", "Benjamin", "Bianca", "Blake", "Braden", "Bradley", "Brady", "Brandon", "Brayden", "Breanna", "Brendan", "Brian", "Briana", "Brianna", "Brittany", "Brody", "Brooke", "Brooklyn", "Bryan", "Bryce", "Bryson", "Caden", "Caitlin", "Caitlyn", "Caleb", "Cameron", "Camila", "Carlos", "Caroline", "Carson", "Carter", "Cassandra", "Cassidy", "Catherine", "Cesar", "Charles", "Charlotte", "Chase", "Chelsea", "Cheyenne", "Chloe", "Christian", "Christina", "Christopher", "Claire", "Cody", "Colby", "Cole", "Colin", "Collin", "Colton", "Conner", "Connor", "Cooper", "Courtney", "Cristian", "Crystal", "Daisy", "Dakota", "Dalton", "Damian", "Daniel", "Daniela", "Danielle", "David", "Delaney", "Derek", "Destiny", "Devin", "Devon", "Diana", "Diego", "Dominic", "Donovan", "Dylan", "Edgar", "Eduardo", "Edward", "Edwin", "Eli", "Elias", "Elijah", "Elizabeth", "Ella", "Ellie", "Emily", "Emma", "Emmanuel", "Eric", "Erica", "Erick", "Erik", "Erin", "Ethan", "Eva", "Evan", "Evelyn", "Faith", "Fernando", "Francisco", "Gabriel", "Gabriela", "Gabriella", "Gabrielle", "Gage", "Garrett", "Gavin", "Genesis", "George", "Gianna", "Giovanni", "Giselle", "Grace", "Gracie", "Grant", "Gregory", "Hailey", "Haley", "Hannah", "Hayden", "Hector", "Henry", "Hope", "Hunter", "Ian", "Isaac", "Isabel", "Isabella", "Isabelle", "Isaiah", "Ivan", "Jack", "Jackson", "Jacob", "Jacqueline", "Jada", "Jade", "Jaden", "Jake", "Jalen", "James", "Jared", "Jasmin", "Jasmine", "Jason", "Javier", "Jayden", "Jayla", "Jazmin", "Jeffrey", "Jenna", "Jennifer", "Jeremiah", "Jeremy", "Jesse", "Jessica", "Jesus", "Jillian", "Jocelyn", "Joel", "John", "Johnathan", "Jonah", "Jonathan", "Jordan", "Jordyn", "Jorge", "Jose", "Joseph", "Joshua", "Josiah", "Juan", "Julia", "Julian", "Juliana", "Justin", "Kaden", "Kaitlyn", "Kaleb", "Karen", "Karina", "Kate", "Katelyn", "Katherine", "Kathryn", "Katie", "Kayla", "Kaylee", "Kelly", "Kelsey", "Kendall", "Kennedy", "Kenneth", "Kevin", "Kiara", "Kimberly", "Kyle", "Kylee", "Kylie", "Landon", "Laura", "Lauren", "Layla", "Leah", "Leonardo", "Leslie", "Levi", "Liam", "Liliana", "Lillian", "Lilly", "Lily", "Lindsey", "Logan", "Lucas", "Lucy", "Luis", "Luke", "Lydia", "Mackenzie", "Madeline", "Madelyn", "Madison", "Makayla", "Makenzie", "Malachi", "Manuel", "Marco", "Marcus", "Margaret", "Maria", "Mariah", "Mario", "Marissa", "Mark", "Martin", "Mary", "Mason", "Matthew", "Max", "Maxwell", "Maya", "Mckenzie", "Megan", "Melanie", "Melissa", "Mia", "Micah", "Michael", "Michelle", "Miguel", "Mikayla", "Miranda", "Molly", "Morgan", "Mya", "Naomi", "Natalia", "Natalie", "Nathan", "Nathaniel", "Nevaeh", "Nicholas", "Nicolas", "Nicole", "Noah", "Nolan", "Oliver", "Olivia", "Omar", "Oscar", "Owen", "Paige", "Parker", "Patrick", "Paul", "Payton", "Peter", "Peyton", "Preston", "Rachel", "Raymond", "Reagan", "Rebecca", "Ricardo", "Richard", "Riley", "Robert", "Ruby", "Ryan", "Rylee", "Sabrina", "Sadie", "Samantha", "Samuel", "Sara", "Sarah", "Savannah", "Sean", "Sebastian", "Serenity", "Sergio", "Seth", "Shane", "Shawn", "Shelby", "Sierra", "Skylar", "Sofia", "Sophia", "Sophie", "Spencer", "Stephanie", "Stephen", "Steven", "Summer", "Sydney", "Tanner", "Taylor", "Thomas", "Tiffany", "Timothy", "Travis", "Trenton", "Trevor", "Trinity", "Tristan", "Tyler", "Valeria", "Valerie", "Vanessa", "Veronica", "Victor", "Victoria", "Vincent", "Wesley", "William", "Wyatt", "Xavier", "Zachary", "Zoe", "Zoey"
];
const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams", "Nelson", "Hill", "Ramirez", "Campbell", "Mitchell", "Roberts", "Carter", "Phillips", "Evans", "Turner", "Torres", "Parker", "Collins", "Edwards", "Stewart", "Flores", "Morris", "Nguyen", "Murphy", "Rivera", "Cook", "Rogers", "Morgan", "Peterson", "Cooper", "Reed", "Bailey", "Bell", "Gomez", "Kelly", "Howard", "Ward", "Cox", "Diaz", "Richardson", "Wood", "Watson", "Brooks", "Bennett", "Gray", "James", "Reyes", "Cruz", "Hughes", "Price", "Myers", "Long", "Foster", "Sanders", "Ross", "Morales", "Powell", "Sullivan", "Russell", "Ortiz", "Jenkins", "Gutierrez", "Perry", "Butler", "Barnes", "Fisher", "Henderson", "Coleman", "Simmons", "Patterson", "Jordan", "Reynolds", "Hamilton", "Graham", "Kim", "Gonzales", "Alexander", "Ramos", "Wallace", "Griffin", "West", "Cole", "Hayes", "Chavez", "Gibson", "Bryant", "Ellis", "Stevens", "Murray", "Ford", "Marshall", "Owens", "Mcdonald", "Harrison", "Ruiz", "Kennedy", "Wells", "Alvarez", "Woods", "Mendoza", "Castillo", "Olson", "Webb", "Washington", "Tucker", "Freeman", "Burns", "Henry", "Vasquez", "Snyder", "Simpson", "Crawford", "Jimenez", "Porter", "Mason", "Shaw", "Gordon", "Wagner", "Hunter", "Romero", "Hicks", "Dixon", "Hunt", "Palmer", "Robertson", "Black", "Holmes", "Stone", "Meyer", "Boyd", "Mills", "Warren", "Fox", "Rose", "Rice", "Moreno", "Schmidt", "Patel", "Ferguson", "Nichols", "Herrera", "Medina", "Ryan", "Fernandez", "Weaver", "Daniels", "Stephens", "Gardner", "Payne", "Kelley", "Dunn", "Pierce", "Arnold", "Tran", "Spencer", "Peters", "Hawkins", "Grant", "Hansen", "Castro", "Hoffman", "Hart", "Elliott", "Cunningham", "Knight", "Bradley"
];
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo Democratic Republic", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Palestinian State*", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "St. Kitts & Nevis", "St. Lucia", "St. Vincent & The Grenadines", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Netherlands", "The Philippines", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City (Holy See)", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

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
    'Foreign Language 1': 0,
    'Foreign Language 2': 0,
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

const professions = [
    {
        name: ['Anthropologist', 'Historian'],
        stats: ['int'],
        skills: {
            'Anthropology': 50,
            'Bureaucracy': 40,
            'Foreign Language 1': 50,
            'Foreign Language 2': 40,
            'History': 60,
            'Occult': 40,
            'Persuade': 40,
        },
        skillsExtraCount: 2,
        skillsExtra: {
            'Anthropology': 40,
            'Archaeology': 40,
            'HUMINT': 50,
            'Navigate': 50,
            'Ride': 50,
            'Search': 60,
            'Survival': 50,
        },
        bonds: 4,
    },
    {
        name: ['Computer Scientist', 'Computer Engineer'],
        stats: ['int'],
        skills: {
            'Computer Science': 60,
            'Craft (Electrician)': 30,
            'Craft (Mechanic)': 30,
            'Craft (Microelectronics)': 40,
            'Science (Mathematics)': 40,
            'SIGINT': 40,
        },
        skillsExtraCount: 4,
        skillsExtra: {
            'Accounting': 50,
            'Bureaucracy': 50,
            'Craft (choose one)': 40,
            'Foreign Language 1': 40,
            'Foreign Language 2': 40,
            'Heavy Machinery': 50,
            'Law': 40,
            'Science (choose one)': 40,
        },
        bonds: 3,
    },
    {
        name: ['Federal Agent'],
        stats: ['con', 'pow', 'cha'],
        skills: {
            'Alertness': 50,
            'Bureaucracy': 40,
            'Criminology': 50,
            'Drive': 50,
            'Firearms': 50,
            'Forensics': 30,
            'HUMINT': 60,
            'Law': 30,
            'Persuade': 50,
            'Search': 50,
            'Unarmed Combat': 60,
        },
        skillsExtraCount: 1,
        skillsExtra: {
            'Accounting': 60,
            'Computer Science': 50,
            'Foreign Language 1': 50,
            'Foreign Language 2': 50,
            'Heavy Weapons': 50,
            'Pharmacy': 50,
        },
        bonds: 3,
    },
    {
        name: ['Physician'],
        stats: ['int', 'pow', 'dex'],
        skills: {
            'Bureaucracy': 50,
            'First Aid': 60,
            'Medicine': 60,
            'Persuade': 40,
            'Pharmacy': 50,
            'Science (Biology)': 60,
            'Search': 40,
        },
        skillsExtraCount: 2,
        skillsExtra: {
            'Forensics': 50,
            'Psychotherapy': 60,
            'Science (choose one)': 50,
            'Surgery': 50,
        },
        bonds: 3,
    },
    {
        name: ['Scientist'],
        stats: ['int'],
        skills: {
            'Bureaucracy': 40,
            'Computer Science': 40,
            'Science (choose one)': 60,
            'Science (choose another)': 50,
            'Science (choose yet another)': 50,
        },
        skillsExtraCount: 3,
        skillsExtra: {
            'Accounting': 50,
            'Craft (choose one)': 40,
            'Foreign Language 1': 40,
            'Foreign Language 2': 40,
            'Forensics': 40,
            'Law': 40,
            'Pharmacy': 40,
        },
        bonds: 4,
    },
    {
        name: ['Special Operator'],
        stats: ['str', 'con', 'pow'],
        skills: {
            'Alertness': 60,
            'Athletics': 60,
            'Demolitions': 40,
            'Firearms': 60,
            'Heavy Weapons': 50,
            'Melee Weapons': 50,
            'Military Science (Land)': 60,
            'Navigate': 50,
            'Stealth': 50,
            'Survival': 50,
            'Swim': 50,
            'Unarmed Combat': 60,
        },
        skillsExtraCount: 0,
        skillsExtra: {},
        bonds: 2,
    },
    // TODO: add more professions frmo p. 25+
    // TODO: convert (choose one) skills to real qualified skills
];

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

function choose(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getProfession() {
    const obj = {};
    const p = choose(professions);

    obj['name'] = choose(p['name']);
    obj['stats'] = p['stats'];
    obj['skills'] = p['skills'];
    const skillSet = new Set();
    while (skillSet.size < p['skillsExtraCount']) {
        skillSet.add(choose(Object.keys(p['skillsExtra'])));
    }
    skillSet.forEach(skill => obj['skills'][skill] = p['skillsExtra'][skill]);
    obj['bonds'] = p['bonds'];

    return obj;
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

    set('firstName', choose(firstNames));
    set('lastName', choose(lastNames));
    set('age', randint(19, 50));
    set('nationality', choose(countries));

    // TODO: add bonds
    // TODO: add motivations
    // TODO: maybe add mental disorder
    // TODO: maybe add adapted states
    // TODO: add distinguishing features beside attributes (p. 21)

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

    const profession = getProfession();
    set('profession', profession['name'])
    Object.keys(profession['skills']).forEach(skill => {
        c['skills'][skill] = profession['skills'][skill];
    })

    // TODO: randomly perturb the skills to fake field experience

    return c;
}

function print(character) {
    const get = function(key) {
        return character[key] || String(key);
    }

    console.log('* Character');
    console.log('** Detail');
    console.log('\tName: ' + get('firstName') + ' ' + get('lastName'));
    console.log('\tAge: ' + get('age'));
    console.log('\tNationality: ' + get('nationality'));
    console.log('\tProfession: ' + get('profession'));
    console.log('** Attributes')
    console.log('\tSTR: ' + get('str') + '\t\tDEX: ' + get('dex'));
    console.log('\tCON: ' + get('con') + '\t\tINT: ' + get('int'));
    console.log('\tPOW: ' + get('pow') + '\t\tCHA: ' + get('cha'));
    console.log('\tHP: ' + get('hp') + '\t\tWP: ' + get('wp'));
    console.log('\tSAN: ' + get('san') + '\t\tBP: ' + get('bp'));
    console.log('** Skills');
    Object.keys(character['skills']).sort().forEach(skill => {
        console.log('\t' + skill + ': ' + character['skills'][skill]);
    })
}

print(generate());
