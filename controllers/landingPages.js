const PageVisit = require('../models/pageVisit');
const ButtonClick = require('../models/buttonClick');

const { awesomeTemplateCSS } = require('../templates/awesomeTemplateCSS');
const { awesomeTemplateHTML } = require('../templates/awesomeTemplateHTML');

let visitCount = 1;
const isEven = (n) => {
    return n % 2 == 0;
}

const saveBtnClick = ({ip, buttonColor, trafficSource}) => {
    let btnClick = new ButtonClick({ip, buttonColor, trafficSource});
  
    btnClick.save((err, data) => {
          if (err) {
              console.log('error saving btnClick in DB:', err);
          } else {
              console.log('btnClick saved successfully in DB', data);
          }
    });
  }

exports.buyNowBtnClicked = (req, res, next) => {
    console.log('buyNowBtnClicked controller func ran')
    console.log('req.body', req.body)
    let { buttonColor } = req.body;
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    saveBtnClick({ip, buttonColor});    

    res.send({ok: 'all good'})
}

exports.displayLP = (req, res, next) => {
    let buttonColor = isEven(visitCount) ? 'purple' : '#4CAF50'
    visitCount++;
    res.send(awesomeTemplateCSS({buttonColor})+awesomeTemplateHTML({buttonColor}));
}