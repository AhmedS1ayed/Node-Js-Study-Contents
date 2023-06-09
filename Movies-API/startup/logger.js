const winston = require("winston");
const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "./logs/info.log",
      level: "info",
    }),
    new winston.transports.File({
        filename: "./logs/warn.log",
        level: "warn",
      }),
  ],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

module.exports = logger;