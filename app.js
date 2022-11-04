const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const path=require('path');
const { notfoundHandler, errorHandler } = require('./middlewares/Error/errorHandler');
const loginRoute=require('./router/loginRoute');
const userRoute=require('./router/userRoute');
const inboxRoute=require('./router/inboxRoute');
const app = express();
dotenv.config()

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log('database connected'))
    .catch((err) => console.log('db connection error', err));

// req parses 
    app.use(express.json());
    app.use(express.urlencoded({
        extended:true
    }));

    // view engine
    app.set('view engine','ejs');

    //public file
    app.use(express.static(path.join(__dirname,'public')));


    // cookie parse
    app.use(cookieParser(process.env.COOKIE_SECRET));


    //routes
 
    app.use('/',loginRoute);
    app.use('/users',userRoute);
    app.use('/inbox',inboxRoute);
    //not fount 404
    app.use(notfoundHandler);

    //error handler
    app.use(errorHandler);



app.listen(process.env.PORT, () => console.log(`app running at port 50000`))