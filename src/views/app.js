const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded({estended:false}));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'})

app.use('/resources', express.static('public'))
app.use('/resources', express.static(__dirname + '/public'))

app.set('view engine', 'ejs');

const bcryptjs = require('bcryptjs');

const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// llamamos nuestra coneccion
const connection = require('./database/db');


app.get('/', (req, res)=>{
    res.render("index", {msg: 'mensaje env'});
});
app.get('/login', (req, res)=>{
    res.render("login", {msg: 'mensaje env'});
});
app.get('/register', (req, res)=>{
    res.render("registro", {msg: 'mensaje env'});
});

app.post('/registro', async (req, res)=>{
    const nom= req.body.nom;
    const usr = req.body.usr;
    const pass = req.body.pass;
    const status = req.body.status;
    let passwordHaash = await bcryptjs.hash(pass, 8);
    connection.query('INSERT INTO login SET ?', {name:nom, user:usr, pass:passwordHaash, status:status }, async(error, result)=>{
        if(error){
            res.render("index", {msg: 'No se pudo guardar el registro =' + error })
            // console.log("No se pudo guardar el registro = " + error)
        }
            res.render("index", {msg: 'se guardo correctamente el registro.'})
            // res.send("register", {
            //     alert: true,
            //     alertTitle: "Registro",
            //     alertMessage: "Usuario registrado",
            //     alertIcon: "success",
            //     showConfirmButton:false,
            //     timer: 1500,
            //     ruta: ''
            // });
    })
})

app.post('/auth', async (req, res)=>{
    const usr = req.body.usr;
    const pass = req.body.pass;
    let passwordHaash = await bcryptjs.hash(pass, 8);
    if(usr && pass){
        connection.query('SELECT * FROM login WHERE user = ?', [usr], async(error, result)=>{
            // console.log(passwordHaash +" == "+ result[0].pass)
            console.log((await bcryptjs.compareSync(pass, result[0].pass)));
            
            // if(result.length == 0 || !(await bcryptjs.compare(pass, result[0].pass))){
            if(result.length == 0 || usr != result[0].user){
                res.render('index', {msg: 'Tus datos son incorrectos'})
            }
                res.render('index', {msg: 'Tus datos son correctos'})
        })
    }
})

app.listen(3000, (request, response) =>{
    console.log("server runing");
});