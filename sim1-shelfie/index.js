const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const massive     = require('massive');
const controller = require('./server/controller.js');
require('dotenv').config();
const app = express();
 
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log("String");
});

app.get('/hello', function(req, res, next) {
    res.send("hello");
});

app.get('/api/shelf/:shelfId', controller.getShelf);

app.get('/api/bin/:binId', controller.getBin);

app.post('/api/bin/:binId', controller.createBin);

app.put('/api/bin/:binId', controller.updateBin);

app.delete('/api/bin/:binId', controller.deleteBin);


app.listen(process.env.PORT || 3001, function() {
    console.log("Server started");
})