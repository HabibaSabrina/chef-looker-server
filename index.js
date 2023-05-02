const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chefs = require('./data/chef.json')

app.get('/', (req,res) =>{
    res.send('server is running')
})
app.get('/chef', (req,res) =>{
    res.send(chefs)
})
app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})