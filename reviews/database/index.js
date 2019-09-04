const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

//insert randomly generated data into mySQL database
const seedData = function(data, callback) {
  connection.query('INSERT INTO review SET ?', data, (err, suc) => {
    if (err) {
      callback(err);
    } else {
      callback(null, suc);
    }
  })
};

//retrieve data from mySQL database
const getData = function(id, callback) {
  connection.query(`SELECT * FROM review WHERE listingId = ${id}`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

module.exports.seedData = seedData;
module.exports.getData = getData;