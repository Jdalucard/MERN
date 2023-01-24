const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');
mongoose.set('strictQuery', false);

// Listen to Port
const PORT = process.env.PORT || 5000


const app = express();
require("dotenv").config();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Database setup
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, // <-- no longer necessary
  useUnifiedTopology: true // <-- no longer necessary
}).then(() => { console.log("Base de datos conectada")});

// Routes Setup
//prueba ruta uno
/* app.get('/', (req, res)=>{
  res.send("mensaje enviado desde mongo proyecto mern")
}); */

app.use('/api/category', require('./routes/category'));
app.use('/api/videogame', require('./routes/videogame'))
/*app.use('/api/auth', require('./routes/auth')); */


app.listen(PORT, () => {
  console.log(`Servidor de videojuegos MERN esta ejecutando en el puerto ${PORT}`);
})