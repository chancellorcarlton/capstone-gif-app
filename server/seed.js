require('dotenv').config();
const {CONNECTION_STRING} = process.env;

const Sequelize = require('sequelize');
const sequelize = new sequelize(CONNECTION_STRING, {
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
        CREATE TABLE users (
            username SERIAL PRIMARY KEY,
            password VARCHAR(180),
            first_name VARCHAR(180),
            last_name VARCHAR(180),
            email VARCHAR(300)
        );
        `).then(() => {
            console.log('DB SEEDED!');
            res.sendStatus(200);
        }).catch(err => console.log('ERROR SEEDING DB', err))
    }
};