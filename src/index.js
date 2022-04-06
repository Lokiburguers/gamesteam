//console.log("Desarrollo con express");
//importaciones
const express = require('express'),
    path = require('path'),
    pug = require('pug'),
    ejs = require('ejs')

//instacia de express
const app = new express();

//recursos estaticos
//establecer puerto de comunicacion
app.set('port',4000);
//motor de plantillas
app.set('view engine','ejs');
app.set('views', path.join(__dirname + '/views'));
/**************************/

/********************************** */
app.use(express.static(path.join(__dirname +'/public')));
//routes (rutas de las peticiones)
app.use('/examen', require('./routes/index'));


//creacion del servidor
app.listen(app.get('port'),()=>{
    console.log(`servidor respondiendo por el puerto ${app.get('port')}`);
})