var queue = require('../../queue');
var extract = require('./extract');
const {logger , workTime} = require('../../logs/log');

var subStr = 'https://re.kufar.by/vi/';

const Push = function push( link )
{
  return new Promise((resolve , reject)=>
  {
    resolve(link);
  }) 
}

function search(res)
{
  try 
  {
    var BUF ,CARRY;
    for(var i = 1; i < res.length; i += 500)
    {
      BUF = res.indexOf(subStr , i);
      if(BUF != -1)
      {
        i = BUF;
        CARRY = res.indexOf('\u{0022}' , i);
        var a = res.substring(BUF , CARRY);
        Push(a).then((res)=>
        {
          queue.push(cb =>{
          extract(res);
           cb();
          });
        });
      }  
    } 
  } 
  catch (error) 
  {
    logger.error('KUFAR: error in search.js , error: ' + error);
  } 
}

module.exports = search;