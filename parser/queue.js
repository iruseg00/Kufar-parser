const Queue = require("queue");
var queue = Queue();
const {logger} = require('./logs/log');

queue.concurrency = 1;
queue.autostart = true;
queue.timeout = 10000;
var i = 0;

queue.on('error' , function(err , job)
{
  i++;
  logger.warn('error of job # ' + i + ', error: ' + err );
})

queue.on('success', function (result, job) 
{
  i++;
  logger.info( 'job # ' + i + ' added success  ');
})


module.exports = queue;
