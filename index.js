const express = require('express');
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config()

// Stuuufff
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI
if (!mongoURI) {console.log("\033[31mMONGO_URI was not found in ENV variables.\x1b[0m"); process.exit(0);}

// MIDDLEWARE
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(cors())

//Routes
const genRoute = require('./api/routes/gen')
const dataRoute = require('./api/routes/sensor')
app.use('/api', genRoute);
app.use('/data', dataRoute);

//Static Path to Collector Page
app.use(express.static('./collector'));

// Database connection 
mongoose.connect(mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, () => 
    console.log("Database initialized...")
)

// Starting Express
console.log(`Available at localhost${PORT}`)
app.listen(PORT);


