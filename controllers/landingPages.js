const PageVisit = require('../models/pageVisit');
const ButtonClick = require('../models/buttonClick');

const { awesomeTemplateCSS } = require('../templates/awesomeTemplateCSS');
const { awesomeTemplateHTML } = require('../templates/awesomeTemplateHTML');

exports.displayLP = (req, res, next) => {
    res.send(awesomeTemplateCSS()+awesomeTemplateHTML({buttonColor: 'green'}));
}