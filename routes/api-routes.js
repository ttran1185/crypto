// api-route.js
const mysql = require('mysql2');
// connection configurations
const connection = mysql.createConnection({
    host: 'f2fbe0zvg9j8p9ng.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'u3vfu0u82u0d9jyt',
    password: 'uqgilq8s85emmom5',
    database: 'pbtbht79duaerfrb'
});

// connect to database
connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})


module.exports = (app) => {
  app.get('/api/cryptos', (req, res) => {
    connection.query('select * from currencies',
        function (error, results) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
  })
}