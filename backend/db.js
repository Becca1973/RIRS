const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// objekt za povezavo z bazo
const db = mysql.createConnection({
    host: process.env.DB_HOST,       // Naslov gostitelja baze podatkov (npr. localhost ali IP naslov)
    user: process.env.DB_USER,       // Uporabniško ime za bazo podatkov
    password: process.env.DB_PASSWORD, // Geslo za bazo podatkov
    database: process.env.DB_NAME,   // Ime baze podatkov
});

// Funkcija za povezavo z bazo podatkov in obravnavo napak pri povezavi
const connectDB = () => {
    db.connect((err) => {
        if (err) {
            // Izpiše sporočilo o napaki, če povezava ni uspešna
            console.error('Povezava z bazo podatkov ni uspela:', err.message);
        } else {
            // Izpiše sporočilo o uspešni povezavi
            console.log('Povezava z MySQL bazo podatkov je vzpostavljena');
        }
    });
};

// Izvozi povezavo z bazo podatkov in funkcijo connectDB za uporabo v drugih datotekah
module.exports = { db, connectDB };
