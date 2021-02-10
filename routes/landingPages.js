const express = require('express');
const router = express.Router();

const { displayLP, buyNowBtnClicked } = require('../controllers/landingPages')

router.get('/', displayLP)

router.post('/buy-now-clicked', buyNowBtnClicked);

// router.get('/tags', list);
// router.delete('/tag/:slug', remove);
// router.put('/tag/:slug', update);

module.exports = router; 
