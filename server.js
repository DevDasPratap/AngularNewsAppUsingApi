const express = require('express');
const app = express();
app.use(express.static(__dirname+'/dist/newsapp'));
app.get('/*', (req, res) => {
    res.sendFile(__dirname+'/dist/newsapp/index.html');
});
app.listen(process.env.PORT || 8080);