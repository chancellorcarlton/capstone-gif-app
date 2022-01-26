require('dotenv').config();
const {GIF_API_KEY} = process.env
const axios = require('axios');
const apiKey = GIF_API_KEY;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    getGif: (req, res) => {
        axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=funny&rating=g`)
        .then(gifRes => {
            res.status(200).send(gifRes.data.data.images.original.url);
        });
    },

    user: (req, res) => {
        console.log(req.body);
        const {username, password, firstName, lastName, email} = req.body;

        sequelize.query(`INSERT INTO users (username, password, first_name, last_name, email)
        VALUES('${username}', '${password}', '${firstName}', '${lastName}', '${email}')
        RETURNING *;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err));
    },

    login: (req, res) => {
        console.log(req.body);
        const {username, password} = req.body;

        sequelize.query(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`)
            
            .then(dbRes => 
                // console.log(dbRes)
                {if(dbRes[0].length < 1){
                    res.status(400).send(console.log("Invalid entry"))
                }else{
                    res.status(200).send(dbRes[0])
                }}
            );
    },



    

    // remove: (req, res) => {
    //     console.log(req.body);
    //     const {username, password} = req.body

    //     sequelize.query(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}';
    //         DELETE FROM users WHERE username = '${username}' AND password = '${password}`)
    //         .then(dbRes => 
    //         // console.log(dbRes)
    //         {if(dbRes[0].length < 1){
    //             res.status(400).send(console.log("Invalid entry"))
    //         }else{
    //             res.status(200).send(dbRes[0])
    //         }}
    //     );
    // }
};