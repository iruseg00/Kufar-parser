const Queue = require("queue");
var queue = Queue();
const {logger , workTime } = require('./logs/log');

queue.concurrency = 1;
queue.autostart = false;
queue.timeout = 10000;
var i = 0;
var flag = true;
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

queue.on('end' , (err) =>
{
  if (flag === true) 
  {
    flag = false;
    queue.push(cb=>
    {
      workTime.info('---end---');
      cb();
    })
  }
});

module.exports = queue;