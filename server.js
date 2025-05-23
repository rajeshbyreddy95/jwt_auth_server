const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({"message":"server running"});
});

