require("dotenv").config();
const Kufar = require('./sites/kufar/Kufar');
const { logger , memory , workTime } = require('./logs/log');
const Sequelize = require('./db/config/connect');
const queue = require('./queue');

var timer = 
{
  "development" : 0 ,
  "production"  : 900000
};

try 
{
  var env = process.env.NODE_ENV || "development";

  Sequelize
    .authenticate()
    .then(() => 
    {
      logger.info("Connection has been established successfully");
    })
    .catch(error => 
    {
      logger.error("Unable to connect to the database: " + error);
    });
    
  setTimeout(()=>
  {
    let start = async ()=>{
    workTime.info('---start---');
    await Kufar();
    queue.start();
    };
    start();
  }, timer[env]);
} 
catch (error) 
{
  logger.error('error in index.js or inside , error: ' + error);
}
finally
{
  memory.info(`index.js \n` + 
              `rss       : ${process.memoryUsage().rss / 1048576}  MB\n` + 
              `Total Heap: ${process.memoryUsage().heapTotal / 1048576}  MB\n` + 
              `Used Heap : ${process.memoryUsage().heapUsed / 1048576} MB\n` + 
              `PPID      : ${process.ppid}\n` + 
              `PID       : ${process.pid}\n`);
}
