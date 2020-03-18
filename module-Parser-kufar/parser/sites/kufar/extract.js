var rp = require('request-promise');
var send = require('./send');
const {logger} = require('../../logs/log');
var cheerio = require('cheerio');

var array = [];

async function prom()
{
  array = array.replace( /\|,"/g , '","')
                .replace( /":i/g , '":"i')
                .replace( /¨/g , '')
                .replace( /"rawParams":/g , '')
                .replace( /{/g , '');
                // console.log(array)
  return  array ;
}

function extract(link)
{
  try 
  {
    rp.get(link)
    .then(async(result) => {
        array = result.toString();
        var i = array.lastIndexOf("\"body\":\"");
        var BUF = array.indexOf("\",", i+8);
        var description = array.substring(i+8 , BUF);
        i = array.indexOf("list_time");
        BUF = array.indexOf("\",", i+12);
        var date = array.substring(i+12 , BUF);
        BUF = array.indexOf('phone');
        i = array.indexOf('}' , BUF);
        array = array.substring(BUF , i );
        array = '{\"' + await prom() + '}';
        var object = JSON.parse(array);
        object.description = description;
        object.dateCreated = date;
        object.link = link;
        logger.info('KUFAR: extract SUCCESS ' + object.link);
        return send(object);
    });
  } 
  catch (error) 
  {
    logger.error('KUFAR: error in extract.js , error:' + error);
  }
}

module.exports = extract;