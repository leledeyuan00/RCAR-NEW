const express = require("express");

const app = express();

require('./routes/admin')(app)


app.use('/',express.static(__dirname + '/desktop'))
app.use('/mobile',express.static(__dirname + '/mobile'))



app.listen(3000, () => {
  console.log("http://localhost:3000");
});
