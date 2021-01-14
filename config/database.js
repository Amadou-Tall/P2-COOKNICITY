const mongoose = require('mongoose');
console.log ('This is to test' + process.env.DATABASE_URL);
mongoose.connect (process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});