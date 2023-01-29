const app = require('./handler')
/*
running this app: 
  with node : $ npm run serve 
  with sls  : $ sls offline
running tests:
  with mocha : $ npm run test
*/
app.test.listen(3001, () => { 
    console.log(`http://localhost:3001`)
});