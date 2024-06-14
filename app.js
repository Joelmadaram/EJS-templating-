const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1; 
    res.render('random', {rand: num})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})


