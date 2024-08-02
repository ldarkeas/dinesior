const express = require('express');
// const productos = require('./store/productos.json')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT || 3000

//rutas
app.get('/', (request, response)=>{
response.send('<h1>Primer API</h1>')
})





app.listen(PORT, ()=>{

    console.log(`el servidos se ejecuta en http://localhost:${PORT}`)
})

app.get('/saludo/:name', (req, res)=>{
    
    // const nombre = req.params.name
    const { name }= req.params
    // res.send(`<h1>hola ${name}</h1>`)
    res
    // .status(200)
    .json({messae: `hola ${name}`}) 

})

// app.get('/productos', (rqu, res)=>{
// res.json(productos)

// })