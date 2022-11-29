const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use(express.static('kepek'))

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/kiadas', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'koltsegvetes_pr'
    })
    
    connection.connect()
    
    connection.query('SELECT * from kiadas', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()



    
  })


app.get('/koltsegfajta', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'koltsegvetes_pr'
    })
    
    connection.connect()
    
    connection.query('SELECT * from koltsegfajta', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()



    
  })




  

  
    
    
    

    
  


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})