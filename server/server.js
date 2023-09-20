const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool.js')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/submit-feedback', (req, res) => {
    const { feelings, understanding, support, comments } = req.body;

    // SQL Query
    const sql = 'INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4)';
    const values = [feelings, understanding, support, comments];
    

    pool.query(sql, values, (error, result) => { 
        if (error) { 
            console.log('Error inserting data into database:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('Data inserted successfully');
            res.status(201).json({ message: 'Data inserted successfully' });
        }
    })
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});