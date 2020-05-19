/* ------------------------------------------- Imports ------------------------------------------ */

const monk = require('monk');

/* -------------------------------- Set the database to "nudger" -------------------------------- */

const url = 'localhost/nudger';
const db = monk(url);

db.then(() => {
    console.log('Successfully connected to nudger');
});

/* ------------------------------------------- Export ------------------------------------------- */

module.exports = db;
