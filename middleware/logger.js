const moment = require('moment');


// Creating logger middleware
// on every request it weill write hello

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

module.exports = logger;