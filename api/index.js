   const StaticmanAPI = require('../server');
   const api = new StaticmanAPI();
   
   // Export the Express app directly for Vercel
   module.exports = api.app;
