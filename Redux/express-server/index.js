const express = require('express')
var cors = require('cors')
const app = express()
const port = 8081;

var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.get('/userFromExpress', (req, res) => {
  res.send({
      id:1,
      firstName: 'Dharanitharan',
      lastName:'Murugan',
      age:26
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})