const PageVisit = require('../models/pageVisit');
const ButtonClick = require('../models/buttonClick');

const { awesomeTemplateCSS } = require('../templates/awesomeTemplateCSS');
const { awesomeTemplateHTML } = require('../templates/awesomeTemplateHTML');

let visitCount = 1;
const isEven = (n) => {
    return n % 2 == 0;
}

exports.displayLP = (req, res, next) => {
    let buttonColor = isEven(visitCount) ? 'purple' : '#4CAF50'
    visitCount++;
    res.send(awesomeTemplateCSS({buttonColor})+awesomeTemplateHTML());
}