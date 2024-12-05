const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const path = require('path');
const pageRoutes = require('./routes/pageRoutes');

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));



// Cấu hình view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cấu hình thư mục static
app.use(express.static(path.join(__dirname, 'public')));

// Sử dụng các routes
app.use('/', pageRoutes);



// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});