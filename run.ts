const nodemon = require('nodemon');
// import nodemon from 'nodemon';

nodemon({ script: './**/*.ts' })
  .on('start', console.clear)
  .on('restart', console.clear)
  .on('quit', () => {
    console.log('App has quit');
    process.exit();
  });
