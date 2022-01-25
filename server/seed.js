require('dotenv').config();
const {DATABASE_URL} = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
            userid SERIAL PRIMARY KEY,
            username VARCHAR(180) NOT NULL,
            password VARCHAR(180) NOT NULL,
            first_name VARCHAR(180) NOT NULL,
            last_name VARCHAR(180) NOT NULL,
            email VARCHAR(300) NOT NULL
        );
        `).then(() => {
            console.log('DB SEEDED!');
            res.sendStatus(200);
        }).catch(err => console.log('ERROR SEEDING DB', err))
    }
};