const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3500;

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("test backend success");
})
// start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });