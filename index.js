try {
  const StaticmanAPI = require('./server')
  const api = new StaticmanAPI()

  module.exports = app;

app.listen(config.get('port'), () => {
  console.log(`Staticman server running on port ${config.get('port')}`)
})
  
  api.start(port => {
    console.log('Staticman API running on port', port)
  })
  
} catch (e) {
  console.error(e)
}
