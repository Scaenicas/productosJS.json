const express = require("express");

const app = express();
const port = process.env.SERVER_PORT || 8000;

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.json({"id":1,"tipo":"Parlantes","marca":"Samsung","modelo":"USB 6W","precio":1500},
{"id":2,"tipo":"Parlantes","marca":"Philips","modelo":"3.5mm 10W","precio":2800},
{"id":3,"tipo":"Parlantes","marca":"Toshiba","modelo":"Bluetooth 32W","precio":7500},
{"id":4,"tipo":"Monitor 19\"","marca":"LG","modelo":"19HDM","precio":22000},
{"id":5,"tipo":"Monitor 24\"","marca":"Samsung","modelo":"FHD24","precio":32000},
{"id":6,"tipo":"Monitor 27\"","marca":"Philips","modelo":"L27FHDL","precio":38000},
{"id":7,"tipo":"Teclado","marca":"Noga","modelo":"convencional","precio":1500},
{"id":8,"tipo":"Teclado","marca":"Genius","modelo":"RGB","precio":3700},
{"id":9,"tipo":"Teclado","marca":"Microsoft","modelo":"inalámbrico","precio":3600});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
