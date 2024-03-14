const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect('http://localhost:2701/mernapp', { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false  });
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));
