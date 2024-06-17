const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = ['blue', 'kity', 'monty', 'winston']
    res.render('loops', {cats})
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } =req.params;
    const data = redditData[subreddit];
    console.log(data)
    res.render('subreddit', { ...data })
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1; 
    res.render('random', {num: num})
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})


