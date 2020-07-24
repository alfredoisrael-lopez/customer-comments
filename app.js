const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloudpak for Apps");
});
 
module.exports.app = app;
