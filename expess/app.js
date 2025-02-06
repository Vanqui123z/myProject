const express = require('express');
const morgan = require("morgan");
const router = require('./src/app/router');
const path = require('path');
const app = express();
const connectDb= require("./src/config/db");
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.set('views', './src/resources/views/layouts');
// app.use(morgan("succeed"));
app.use('/src/public', express.static(path.join(__dirname, 'src/public')));


// Middleware xử lý dữ liệu từ form
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method')); 

connectDb()


router(app)


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});