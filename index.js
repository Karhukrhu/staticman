const StaticmanAPI = require('./server')
const api = new StaticmanAPI()

// 1. Export the Express app so Vercel can handle HTTP requests
module.exports = api.app

// 2. Only start the traditional server if we are NOT on Vercel
// (This allows you to still run it locally with `node index.js` if you ever need to)
if (process.env.VERCEL !== '1') {
  api.start(port => {
    console.log('Staticman API running on port', port)
  })
}
