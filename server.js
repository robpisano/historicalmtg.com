const express = require('express')
const path = require('path')
const history = require('express-history-api-fallback')
const PORT = process.env.PORT || 5000

const app = express();
const root = __dirname + "/dist/spa";

app.use(express.static(root));
app.use(history('index.html', { root: root }));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));