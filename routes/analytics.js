const express = require('express');
const router = express.Router();

const { renderAnalytics } = require('../controllers/analytics')

router.get('/', renderAnalytics)

// router.get('/tags', list);
// router.delete('/tag/:slug', remove);
// router.put('/tag/:slug', update);

module.exports = router; 
