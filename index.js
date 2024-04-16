import express from "express";
import mysql from "mysql";

const app = express();
app.use(express.json());

const port = 5000;
app.get('/', async (req, res) => {
    const userAgent = await req.headers['user-agent'];
    console.log('User Agent:', userAgent);
    res.send(req.headers['user-agent']);
});

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: 'localhost', // Change this to your MySQL host
    user: 'root',      // Change this to your MySQL username
    password: '12345678',  // Change this to your MySQL password
    database: 'db' // Change this to your MySQL database name
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server:', err);
        return;
    }
    console.log('Connected to MySQL server');
});

// Execute a sample query
connection.query('SELECT * FROM xyz.companys', (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    console.log('Query results:', results);
});

// Close the connection
connection.end();
app.listen(port, () => console.log(`listening on ${port}`));