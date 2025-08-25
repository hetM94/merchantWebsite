// Entry point to start the Express server.
const app = require('./app');
// const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merchant';

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MongoDB', err);
//   });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (MongoDB disabled for test)`);
});
