const Product = require('./models/products')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/farmStandDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection Open')
    })
    .catch((err) => {
        console.log('Oh no error!')
    })

const p = new Product({
    name: 'Ruby Grapefruit',
    category: 'fruit',
    price: 1.99,
    details: "kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd. kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd."
})
p.save()
    .then(p => console.log(p))
    .catch(err => console.log('Error!!!'))
Product.insertMany([
    { name: 'Grape', category: 'fruit', price: 1.58, details: 'kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd.kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd.' },
    { name: 'Milk', category: 'dairy', price: 1.0, details: 'kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd.kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd.' },
    { name: 'Onion', category: 'vegetables', price: 0.75, details: 'kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd.kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd.' },
    { name: 'Potato', category: 'vegetables', price: 0.25, details: 'kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd.kdjhf iuhgsdifb egiueghfe rhdbfw efwef g jhdsgfjwhfvd uygds ii hgjhvdb uysgdhsdb ihsdbvjhb iugbdfhsb hsdbjhsvd.' }
])
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
