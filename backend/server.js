// const app = require('./app');
// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`Server running on http://localhost:${process.env.PORT}`);
//       console.log(`mongodb running`);
//     });
//   })
//   .catch(err => {
//     console.error('Error connecting to MongoDB:', err.message || err);
//   });
  
const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
      console.log(`MongoDB connected successfully`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message || err);
  });
