const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Product = require('./models/products')
mongoose.connect('mongodb://localhost:27017/farmStandDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open')
    })
    .catch((err) => {
        console.log('Oh no error!')
    })



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})
app.get('/products/new', (req, res) => {
    res.render('products/new')
})
app.post('/new', async (req, res) => {
    const prod = new Product(req.body)
    await prod.save()
    res.redirect('/products')
})
app.get('/products/:id/edit', async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)
    res.render('products/edit', { product })
})
app.get('/products/:id/delete', async (req, res) => {
    const id = req.params.id
    const product = await Product.findByIdAndDelete(id)
    res.redirect('/products')
})
app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true })
    res.redirect('/products')
})
app.listen(3000, () => {
    console.log('Listening port 3000')
})