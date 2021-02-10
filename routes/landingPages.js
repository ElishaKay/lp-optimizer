const express = require('express');
const router = express.Router();

const { displayLP } = require('../controllers/landingPages')

router.get('/', displayLP)

// router.post('/tag', create);
// router.get('/tags', list);
// router.delete('/tag/:slug', remove);
// router.put('/tag/:slug', update);

module.exports = router; 
