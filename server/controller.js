const axios = require('axios');
const apiKey = require('./config')

module.exports = {
    getGif: (req, res) => {
        axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey.gif_api_key}&tag=funny&rating=g`)
        .then(gifRes => {
            res.status(200).send(gifRes.data.data.images.original.url);
        });
    }

}