// =====================================================================
//  JS OBJECTS — GAMES EXERCISES
//  Write your answers under each exercise. Use console.log to check.
// =====================================================================

const games = {
  theWitcher3: {
    title: "The Witcher 3: Wild Hunt",
    releaseYear: 2015,
    released: true,
    rating: 9.7,
    developer: { name: "CD Projekt Red", country: "Poland" },
    genres: ["RPG", "Open World", "Fantasy"],
    platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X", "Switch"],
    mainCharacter: {
      name: "Geralt of Rivia",
      age: 95,
      abilities: ["Swordsmanship", "Signs", "Alchemy"],
    },
    characters: [
      { name: "Ciri", role: "Heir" },
      { name: "Yennefer", role: "Sorceress" },
      { name: "Dandelion", role: "Bard" },
    ],
    dlc: [
      { name: "Hearts of Stone", year: 2015 },
      { name: "Blood and Wine", year: 2016 },
    ],
  },

  hollowKnight: {
    title: "Hollow Knight",
    releaseYear: 2017,
    released: true,
    rating: 9.2,
    developer: { name: "Team Cherry", country: "Australia" },
    genres: ["Metroidvania", "Action", "Platformer"],
    platforms: ["PC", "Switch", "PS4", "Xbox One"],
    mainCharacter: {
      name: "The Knight",
      species: "Vessel",
      abilities: ["Nail Strike", "Mothwing Cloak", "Mantis Claw"],
    },
    characters: [
      { name: "Hornet", role: "Protector" },
      { name: "Zote", role: "Self-proclaimed Knight" },
      { name: "Quirrel", role: "Wanderer" },
    ],
    sequel: { title: "Hollow Knight: Silksong", releaseYear: 2025 },
  },

  rdr2: {
    title: "Red Dead Redemption 2",
    releaseYear: 2018,
    released: true,
    rating: 9.8,
    developer: { name: "Rockstar Games", country: "USA" },
    genres: ["Action", "Adventure", "Open World", "Western"],
    platforms: ["PC", "PS4", "Xbox One"],
    mainCharacter: {
      name: "Arthur Morgan",
      age: 36,
      abilities: ["Dead Eye", "Horse Riding", "Hunting"],
    },
    characters: [
      { name: "Dutch van der Linde", role: "Gang Leader" },
      { name: "John Marston", role: "Gang Member" },
      { name: "Sadie Adler", role: "Gunslinger" },
    ],
    horse: { name: "Buell", breed: "Hungarian Half-bred" },
  },

  gta6: {
    title: "Grand Theft Auto VI",
    releaseYear: 2026,
    released: false,
    rating: null,
    developer: { name: "Rockstar Games", country: "USA" },
    genres: ["Action", "Open World", "Crime"],
    platforms: ["PS5", "Xbox Series X"],
    mainCharacter: {
      name: "Lucia",
      age: null,
      abilities: ["Driving", "Shooting"],
    },
    characters: [
      { name: "Jason", role: "Partner" },
    ],
    setting: { city: "Vice City", state: "Leonida" },
  },

  marioKart8: {
    title: "Mario Kart 8 Deluxe",
    releaseYear: 2017,
    released: true,
    rating: 9.0,
    developer: { name: "Nintendo", country: "Japan" },
    genres: ["Racing", "Party"],
    platforms: ["Switch"],
    mainCharacter: {
      name: "Mario",
      species: "Human",
      abilities: ["Drifting", "Item Use"],
    },
    characters: [
      { name: "Luigi", role: "Racer" },
      { name: "Bowser", role: "Racer" },
      { name: "Princess Peach", role: "Racer" },
      { name: "Yoshi", role: "Racer" },
    ],
    cups: {
      mushroom: ["Mario Kart Stadium", "Water Park", "Sweet Sweet Canyon", "Thwomp Ruins"],
      flower: ["Mario Circuit", "Toad Harbor", "Twisted Mansion", "Shy Guy Falls"],
    },
  },

  theLastOfUs: {
    title: "The Last of Us",
    releaseYear: 2013,
    released: true,
    rating: 9.5,
    developer: { name: "Naughty Dog", country: "USA" },
    genres: ["Action", "Survival", "Horror"],
    platforms: ["PS3", "PS4", "PS5", "PC"],
    mainCharacter: {
      name: "Joel Miller",
      age: 52,
      abilities: ["Crafting", "Listen Mode", "Stealth"],
    },
    characters: [
      { name: "Ellie", role: "Companion" },
      { name: "Tess", role: "Smuggler" },
      { name: "Marlene", role: "Fireflies Leader" },
    ],
    enemies: { infected: ["Runner", "Stalker", "Clicker", "Bloater"] },
  },

  crashBandicoot: {
    title: "Crash Bandicoot",
    releaseYear: 1996,
    released: true,
    rating: 8.4,
    developer: { name: "Naughty Dog", country: "USA" },
    genres: ["Platformer"],
    platforms: ["PS1"],
    mainCharacter: {
      name: "Crash",
      species: "Bandicoot",
      abilities: ["Spin Attack", "Jump", "Slide"],
    },
    characters: [
      { name: "Aku Aku", role: "Guardian" },
      { name: "Dr. Neo Cortex", role: "Villain" },
      { name: "Coco", role: "Sister" },
    ],
  },
};


// =====================================================================
//  PART 1 — NAVIGATION (dot / bracket / nested)
// =====================================================================

// 1. Log the country of The Witcher 3's developer.
// write your code here


// 2. Log Hollow Knight's main character's FIRST ability.
// write your code here


// 3. Log the name of the LAST character in RDR2's characters array
//    (don't hardcode the index — use .length).
// write your code here


// 4. Store "setting" in a variable called `key` and log GTA 6's city
//    using BRACKET notation with that variable.
// write your code here


// 5. Log how many platforms Crash Bandicoot is on.
// write your code here


// 6. Log the release year of The Witcher 3's SECOND DLC.
// write your code here


// 7. Log the third track of Mario Kart's flower cup.
// write your code here


// 8. Try to log `games.crashBandicoot.dlc[0].name` safely using
//    optional chaining so it does NOT crash. If it's undefined,
//    log "No DLC" instead (hint: store it in a variable and use an if
//    with typeof ... === "undefined").
// write your code here


// 9. CHANGE: GTA 6 got rated! Set its rating to 9.9 and log it.
// write your code here


// 10. ADD: give The Last of Us a new nested property
//     `sequel: { title: "The Last of Us Part II", releaseYear: 2020 }`
//     then log the sequel's title.
// write your code here


// 11. REMOVE: delete RDR2's `horse` property and log the rdr2 object
//     to check it's gone.
// write your code here


// 12. ADD to a nested array: add a new character
//     { name: "Dr. N. Gin", role: "Villain" } at the END of Crash's
//     characters array WITHOUT push (hint: the next free index is .length).
//     Log the new length of the array.
// write your code here


// 13. DESTRUCTURING: from hollowKnight pull out `title` and the nested
//     developer `name` (rename it to `devName`). Log both.
// write your code here


// =====================================================================
//  PART 2 — OBJECT METHODS & LOOPING
// =====================================================================

// 1. Use Object.keys to log HOW MANY games are in the `games` object.
// write your code here


// 2. Use Object.values + forEach to log the title of EVERY game.
// write your code here


// 3. Use Object.keys + forEach to log each game like:
//    "theWitcher3 -> The Witcher 3: Wild Hunt"
//    (hint: games[key].title)
// write your code here


// 4. Use a for...in loop to log every property NAME of marioKart8.
// write your code here


// 5. Use a for...in loop on theWitcher3 and log every property name
//    together with the TYPE of its value, e.g. "title -> string".
//    (hint: typeof — what does typeof give you for an array?)
// write your code here


// 6. Use forEach and an if to log ONLY the titles of games
//    rated 9.5 or higher.
// write your code here


// 7. Log the titles of every game that is NOT released yet.
// write your code here


// 8. Collect ALL genres from all games into ONE array with no duplicates.
//    Start with `const allGenres = [];`, loop over every game and every
//    genre, and only add a genre if allGenres.indexOf(genre) === -1.
//    Add it at index allGenres.length (no push!).
// write your code here


// 9. Calculate the AVERAGE rating of all games, skipping ratings that
//    are not numbers (hint: typeof rating === "number").
//    Keep a `sum` and a `count` variable while looping.
// write your code here


// 10. Start with an empty object `const yearsByTitle = {};` and fill it
//     in a loop so it becomes
//     { "The Witcher 3: Wild Hunt": 2015, "Hollow Knight": 2017, ... }
//     (hint: yearsByTitle[game.title] = game.releaseYear)
// write your code here


// 11. Make a COPY of hollowKnight: create an empty object and copy
//     every key with a for...in loop. Then
//     change the copy's rating to 10, and log BOTH ratings to prove
//     the original didn't change.
//     Extra: change copy.developer.country — what happens to the
//     original? Why? (shallow copy!)
// write your code here


// 12. Check if `games` has a key "zelda" and a key "rdr2"
//     using `in`. Then check the same keys by comparing with undefined.
//     Log the results.
// write your code here


// 13. Loop over all games and find the OLDEST and the NEWEST game
//     (compare releaseYear while looping). Log both titles.
// write your code here


// 14. Nested forEach: log every character from every game like:
//     "Hollow Knight -> Hornet (Protector)"
// write your code here


// 15. Use indexOf to check which games are available on "Switch".
//     Log "<title> is on Switch" or "<title> is NOT on Switch".
// write your code here


// 16. Count how many games each developer made and store it in an
//     object, e.g. { "Naughty Dog": 2, "Rockstar Games": 2, ... }
// write your code here


// =====================================================================
//  PART 3 — DOM: CREATE ELEMENT & APPEND
// =====================================================================

// 1. Use forEach over all games. For each one create an <li> with
//    document.createElement, set its text to "Title (Year)",
//    and append it to the <ul id="games-list"> in index.html.
// write your code here


// 2. Build a "game card" for ONE game of your choice:
//      - create a <h3> with the title
//      - create a <p> with "Developer: name (country)"
//      - create a <ul> and append one <li> per character (forEach)
//    Append everything into a new <div class="card"> and then
//    append that div to <div id="game-card">.
//    Extra: make it a function `createCard(game)` and render ALL games.
// write your code here


// =====================================================================
//  BONUS — Object.freeze & Object.seal
// =====================================================================
//
// Object.freeze(obj)
//   - You can NOT add new properties
//   - You can NOT remove properties
//   - You can NOT change existing values
//   -> The object becomes read-only.
//
// Object.seal(obj)
//   - You can NOT add new properties
//   - You can NOT remove properties
//   - You CAN change existing values
//   -> The "shape" is locked, but values can still be updated.
//
// Check with: Object.isFrozen(obj) / Object.isSealed(obj)
//
// In normal scripts the blocked operations FAIL SILENTLY (no error,
// nothing happens). In "use strict" mode they throw a TypeError.
//
// IMPORTANT: both are SHALLOW. Nested objects are NOT frozen/sealed:
//   const g = Object.freeze({ dev: { name: "A" } });
//   g.dev = {};          // ignored (frozen)
//   g.dev.name = "B";    // works! the nested object isn't frozen
//
// TASK:
//   a) Freeze games.crashBandicoot. Try to change its rating, add a
//      `price` property and delete `genres`. Log the object — what changed?
//   b) Seal games.marioKart8. Try the same three operations. Log it.
//   c) Log Object.isFrozen / Object.isSealed for both.
//   d) Change games.crashBandicoot.developer.name — does it work? Why?
//   e) (Hard) Write a function deepFreeze(obj) that freezes an object
//      AND every nested object inside it.
//      (hint: for...in + typeof value === "object")
// write your code here

