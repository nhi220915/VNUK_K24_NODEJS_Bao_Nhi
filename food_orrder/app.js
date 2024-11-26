require('dotenv').config();		
const express = require("express");
const bodyParser = require('body-parser');		
const app = express();
const connectDB = require("./configs/database");
const router = require("./routers");

// Nhận file controller
// const categoryControllers = require('./controllers/category.controller');	
const foodControllers = require('../controllers/food.controller');	

const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({
 extended: true }));
connectDB();

// Đăng ký routes
router(app);

// Sử dụng EJS làm view engine															
app.set('view engine', 'ejs');															
app.set('views', './views');	

// Middleware															
app.use(bodyParser.urlencoded({ extended: true }));	

// Controller để render trang EJS
// app.get('/', categoryControllers.getData);	
app.get('/foods', foodControllers.getData); // Sử dụng foodControllers.getData

// Lắng nghe cổng
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});