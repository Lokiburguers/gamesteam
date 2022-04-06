const express = require('express');
const router = express.Router();


router.get('/mensaje',(req,res)=>{
    res.render('mensaje', {mensaje:"modal"})
})

router.get('/nuevo',(req,res)=>{
    res.render('nuevo', {mensaje:"nuevo"})
    
})

router.get('/registro',(req,res)=>{
    res.render('registro', {mensaje:"registro"})
    
})

router.get('/login',(req,res)=>{
    res.render('login', {mensaje:"login"})
    
})

router.get('/administrador', async(req,res)=>{
    res.render('administrador', {mensaje:"administrador", result})
    
})




router.get('/paginate',(req,res)=>{
    res.render('paginate', {mensaje:"pagina"})
})
router.get('/carrusel',(req,res)=>{
    res.render('carrusel', {mensaje:"p"})
})

router.get('/carrusel', (req,res)=>{
    const producto1 = {
            id: unchard,
            nombre: "juego1",
            descripcion: "Moto muy rapida",
            imagen: "./"
        }
    const producto2 = {
        id: 2,
        nombre: "Moto 2",
        descripcion: "Moto muy, muy rapida",
        imagen: "/img/jo.jpg"
        }
    const producto3 = {
        id: 3,
        nombre: "Moto 3",
        descripcion: "Moto muy rapida",
        imagen: "/img/jo.jpg"
        }
    const producto = [producto1, producto2, producto3,]
    res.render('card', {producto:producto})
})

















router.get('/acordeon', (req,res) => {
    const arreglo = ["titulo 1", "titulo 2","titulo 3"]
    res.render('acordeon', {arreglo})
})

router.get('/card', (req,res)=>{
    const producto1 = {
            nombre: "producto 1",
            precio: 12000,
            imagen: "/img/p1.jpg"
        }
    const producto2 = {
            nombre: "producto 2",
            precio: 13000,
            imagen: "/img/p2.jpg"
        }
    const producto3 = {
            nombre: "producto 3",
            precio: 14000,
            imagen: "/img/p3.jpg"
        }
    const producto4 = {
            nombre: "producto 4",
            precio: 15000,
            imagen: "/img/p4.jpg"
        }
    const producto5= {
            nombre: "producto 5",
            precio: 16000,
            imagen: "/img/p5.jpg"
        }
        const producto6 = {
            nombre: "producto 4",
            precio: 15000,
            imagen: "/img/p4.jpg"
        }
    const producto7= {
            nombre: "producto 5",
            precio: 16000,
            imagen: "/img/p5.jpg"
        }
    const producto = [producto1, producto2, producto3,  producto4, producto5, producto6, producto7]
    res.render('card', {producto:producto})
})


module.exports = router;