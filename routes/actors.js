var express = require('express');
var axios = require('axios');
var _ = require('lodash')
var router = express.Router();

const { API_KEY } = require('../config/keys');

const ROOT_URL= 'https://api.themoviedb.org/3';
const actors = require('../helpers/actors');

/* GET home page. */
router.get('/', function(req, res, next) {
    const url = `${ROOT_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=5`;
    console.log(actors.actors.length);
    axios.get(url)
        .then((data) => {
            let actors = _.map(data.data.results, _.partialRight(_.pick, ['name', 'id']));
            res.json(actors);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        })
});

module.exports = router;