//index.js

const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();
const app = express();
const PORT =  3000;

mongoose.connect('mongodb+srv://sumitsinghedu05:Sumit12345@sumitcluster.qin5z.mongodb.net/myDb', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
