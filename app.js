const express = require('express');
const app = express ();

app.get("/", (req, res)=>{
    res.sendFile('./static/index.html', {
        root:__dirname
    })
})
app.get("/about", (req, res)=>{
    res.send("Introducción a la página")
})

app.get('/mate/:x/:y', (req, res)=>{
    const {x, y} = req.params
    res.send(`El resultado de la suma es ${parseInt(x)+parseInt(y)}`)
    res.send(`El resultado de la resta es ${parseInt(x)-parseInt(y)}`)
    res.send(`El resultado de la multiplicación es ${parseInt(x)*parseInt(y)}`)
    res.send(`El resultado de la división es ${parseInt(x)/parseInt(y)}`)
    res.send(`El resultado de ll porcentaje es ${parseInt(x)%parseInt(y)}`)
})

app.use((req, res)=>{
    res.status(404).sendFile('./static/noDisponible.html', {
        root:__dirname
    })
})
app.listen(3000, ()=>{
    console.log("server on line")
})