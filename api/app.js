// Imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

// Start Express Server
const app = express();

// Connect to DB
dotenv.config(); // to get the Database connection information
mongoose.connect(process.env.DB_CONNECT, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Connected to DB')
);

// Configuring Express Server
app.use(cors({
    origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials:true
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport
app.use(session({
    name:'projectn.sid',
    resave:false,
    saveUninitialized:false,
    secret: 'r4u7x!A%D*G-KaPdSgVkXp2s5v8y/B?E',
    cookie:{
        maxAge:36000000,
        httpOnly:false,
        secure:false
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

require('./config/passport-config')
app.use(passport.initialize());
app.use(passport.session());


// Import Routes
const authRoute = require('./routes/autentication');

// Route Middlewares
app.use('/api/users', authRoute);

app.listen(3000, () => console.log('API is up and running'));