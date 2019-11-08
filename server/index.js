const express = require("express");

const app = express();

app.set('secret', 'cno189cln12093nm')

app.use(require('cors')())
app.use(express.json())

require('./routes/admin')(app)
require('./routes/web')(app)
require('./plugins/db')(app)

app.use('/admin', express.static(__dirname + '/admin'))
app.use('/',express.static(__dirname + '/desktop'))
app.use('/mobile',express.static(__dirname + '/mobile'))
app.use('/uploads', express.static(__dirname + '/uploads'))


app.listen(3000, () => {
  console.log("http://localhost:3000");
});
