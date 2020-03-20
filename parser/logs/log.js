const winston = require('winston');
const { format } = require('winston');
const { combine, timestamp, label } = format;

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.splat(),
    format.simple(),
  ),
  transports: [
    new winston.transports.File(
      { 
        filename: 'logs/output_log/parser.log', 
        level: 'info' ,
      }),
  ]
});

const workTime = winston.createLogger({
  level: 'info',
  format: format.combine(
    timestamp(),
    format.splat(),
    format.simple()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/output_log/workTime.log', level: 'info' }),
  ]
});

module.exports = { logger , workTime };