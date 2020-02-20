const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const port = process.env.PORT || 3000;
const sequelize = new Sequelize('mapa', 'postgres', '1234', {
    host: 'localhost',
    dialect:'postgres',
})
sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static('./public'));
  
  app.get('/', (req, res) =>{
      
      res.setHeader('Content-type', 'text/html');
      res.sendFile('./public/index.html');
  })
   
  app.get('/observacion', (req, res) =>{
      const file = fs.readFileSync('./nombres.json', 'UTF-8');
      
      res.setHeader('Content-type', 'text/json');
      res.send(file);
  });
  
  app.post('/mapa', (req, res) =>{
      res.setHeader('Content-type', 'text/plain');
      const nombre = req.body.nombre;
      
  
  
      // abrir archivo
      let file = fs.readFileSync('./nombres.json', 'UTF-8');
  
      // convertirlo a un arreglo
      const json = JSON.parse(file);
  
      // insertar un nuevo elemento
      json.nombres.push({"nombre": nombre});
  
      // guardar json en el archivo
      file = fs.writeFileSync('./nombres.json', JSON.stringify(json));
  
      res.send('Datos guardados con éxito');
      
  });
app.listen(port, () => {
    console.log(`Runnin on port${port}`);
});

