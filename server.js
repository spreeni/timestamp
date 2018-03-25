// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Simple in-memory store
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
]

app.get('/:query', (req, res) => {
  var query = req.params.query 
  if (isNaN(query)) { 
    var date = new Date(query)
  } else {
    var date = new Date(query*1000)
  }
  var object = {unix: date.getTime()/1000, natural: naturalDate(date)}
  //$('#head').html($('#head').html() + JSON.stringify(object))
  res.send(JSON.stringify(object))
  //res.send(req.params.query)
})

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})

function naturalDate(val) {
  var str = ''
  switch(val.getMonth()) {
    case 0:
      str+='January '
      break
    case 1:
      str+='February '
      break
    case 2:
      str+='March '
      break
    case 3:
      str+='April '
      break
    case 4:
      str+='May '
      break
    case 5:
      str+='June '
      break
    case 6:
      str+='July '
      break
    case 7:
      str+='August '
      break
    case 8:
      str+='September '
      break
    case 9:
      str+='October '
      break
    case 10:
      str+='November '
      break
    case 11:
      str+='December '
      break
    default:
      return null
  }
  str += val.getDate() + ', ' + val.getFullYear()
  return str
}