// ---------------------------------------------------------------------
// 1. WHAT IS AN OBJECT?
// ---------------------------------------------------------------------
// An object is a collection of KEY: VALUE pairs (also called properties).
//
//   const game = {
//     title: "Hollow Knight",      // string
//     releaseYear: 2017,           // number
//     released: true,              // boolean
//     genres: ["Metroidvania"],    // array
//     developer: { name: "Team Cherry" }, // another object (nested)
//     play: function () { ... }    // function -> called a METHOD
//   };
//
// Keys are strings (quotes optional if the key is a valid name).
// Values can be ANY type, including other objects and arrays.
// 2. VALUE vs REFERENCE
// 3. ACCESS SYNTAX — DOT NOTATION vs BRACKET NOTATION
// 4. ADDING, CHANGING, REMOVING VALUES
// 5. NAVIGATING NESTED OBJECTS  (
// 6. KEYS, VALUES, ENTRIES (Object static methods)
//   const obj = { a: 1, b: 2, c: 3 };
// ---------------------------------------------------------------------
// 7. LOOPING OVER OBJECTS
// ---------------------------------------------------------------------
// Objects are NOT arrays, so no .forEach directly on them.
// Use Object.keys / values / entries first to get an array.
// --- for...of + Object.keys / values / entries ------------------------
//   for (const key of Object.keys(obj)) { ... }
//   for (const value of Object.values(obj)) { ... }
//   for (const [key, value] of Object.entries(obj)) { ... }
//
// --- Collect values into a new array (forEach + push) -----------------
//

// --- Keep only some (forEach + if) ------------------------------------
//   const topRated = [];
//   Object.values(games).forEach(game => {
//     if (game.rating > 9) topRated.push(game.title);
//   });
//

