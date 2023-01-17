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
    
    connection.query('SELECT SUM(kiadas_ar) as szereles FROM kiadas WHERE kiadas_nev="Szerelés"', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    connection.end()
  })



app.get('/rendszerezes', (req, res) => {  

  kapcsolat()
    
    connection.query(`SELECT koltsegfajta.fajta_kep, koltsegfajta.fajta_nev, SUM(kiadas.kiadas_ar) as osszeg
    FROM koltsegfajta
    INNER JOIN kiadas
    ON koltsegfajta.fajta_id=kiadas.kiadas_koltsegfajta
    GROUP By koltsegfajta.fajta_nev`, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    connection.end()
  })

app.get('/osszegzes', (req, res) => {  

    kapcsolat()
      
      connection.query('SELECT SUM(kiadas_ar) as osszeg FROM kiadas', function (err, rows, fields) {
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

app.post('/felvitel', (req, res) => {
  
  kapcsolat()
  
  connection.query("INSERT INTO uzenet  VALUES (NULL, '"+req.body.bevitel1+"', '"+req.body.bevitel2+"', '"+req.body.bevitel3+"')", (err, rows, fields) => {
    if (err) 
        console.log( err)
      else{
      console.log("Sikeres felvitel!")
      res.send("Sikeres felvitel!")}
      
    })
  
  connection.end()
})

  

  
    
    
  


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})