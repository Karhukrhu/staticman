try {
  const StaticmanAPI = require('./server')
  const api = new StaticmanAPI()

  module.exports = app;
  
  api.start(port => {
    console.log('Staticman API running on port', port)
  })
  
} catch (e) {
  console.error(e)
}
