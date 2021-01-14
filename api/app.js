const express = require('express')
const app = express()
const port = 3000
const db = require('./db')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM users ')
    res.send(rows[0])
})

app.post('/createApi', async (req, res) => {
    const { id } = req.body
    console.log(id);
    // const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
    res.send("rows[0]")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})