const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const port = 3000
var connection

function kapcsolat() {
  


connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'koltsegvetes_pr'
  })
  connection.connect
}

app.use(cors())

app.use(express.static('kepek'))

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/kiadas', (req, res) => {
    
    kapcsolat()
    
    connection.query('SELECT* FROM kiadas INNER JOIN koltsegfajta ON kiadas.kiadas_koltsegfajta=koltsegfajta.fajta_id ', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    connection.end()
  })


app.get('/koltsegfajta', (req, res) => {  

  kapcsolat()
    
    connection.query('SELECT * from koltsegfajta', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    connection.end()
  })


app.get('/osszegfajta', (req, res) => {  

  kapcsolat()
    
    connection.query('SELECT * from koltsegfajta', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    connection.end()
  })


//----------------------------------------- kiadas felvitel
app.post('/kiadas', (req, res) => {
  
  kapcsolat()
  
  connection.query('insert into kiadas values (null, '+req.body.bevitel1+')', (err, rows, fields) => {
    if (err) throw err
  
    res.send("Sikerült a felvitel!")
  })
  
  connection.end()
})

  

  
    
    
    

    
  


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})