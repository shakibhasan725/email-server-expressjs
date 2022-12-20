const express = require('express');
const path = require('path');
const {addPeople, storeData} = require('../controllers/pageController');
// router initializations

const router = express.Router();






router.get('/add', addPeople);

router.post('/add', storeData);





// export module


module.exports = router;