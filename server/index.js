const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const port = 3300;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`I can hear ${port}!`));