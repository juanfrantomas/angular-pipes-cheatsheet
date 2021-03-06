const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.use(express.static('./dist/pipes'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', {root: 'dist/pipes'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
