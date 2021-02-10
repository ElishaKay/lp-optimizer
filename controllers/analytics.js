const PageVisit = require('../models/pageVisit');
const ButtonClick = require('../models/buttonClick');

const { awesomeTemplateCSS } = require('../templates/awesomeTemplateCSS');
const { awesomeTemplateHTML } = require('../templates/awesomeTemplateHTML');

exports.renderAnalytics = (req, res, next) => {
    console.log('renderAnalytics func ran in controller')   
    res.send({ok: 'all good'})
}