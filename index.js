const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefs = require('./data/chef.json');
const recipes = require('./data/recipe.json')

app.use(cors())
app.get('/', (req,res) =>{
    res.send('server is running')
})
app.get('/chef', (req,res) =>{
    res.send(chefs)
})
app.get('/recipe', (req,res) =>{
    res.send(recipes)
})
app.get('/chef/:id', (req,res) =>{
    const id = req.params.id
    const selectedChef = chefs.find(c=> c.id === parseInt(id))
    res.send(selectedChef)

})
app.get('/recipe/:rid', (req,res) =>{
    const rid = req.params.rid
    const selectedRecipe = recipes.find(r=> r.rid === parseInt(rid))
    res.send(selectedRecipe)

})
app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})