// api-route.js
const mysql = require('mysql2');
// connection configurations
const connection = mysql.createConnection({
    host: 'ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'bm9fown58etjzehn',
    password: 'v6xvnr9rdq2kal2c',
    database: 'byq0vips69aj56gv'
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