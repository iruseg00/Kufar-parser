const Kufar = require('./sites/kufar/Kufar');
const { logger } = require('./logs/log');
const Sequelize = require('./db/config/connect');
const queue = require('./queue');

var timer = 
{
  "development" : 0 ,
  "production"  : 0
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
    (async function()
    {
      await Kufar();
      queue.start();
    }());
  }, timer[env]);
} 
catch (error) 
{
  logger.error('error in index.js or inside , error: ' + error);
}
