let expressApp;

try {
  // Try to load the Staticman API
  const StaticmanAPI = require('./server');
  const api = new StaticmanAPI();
  expressApp = api.app;
} catch (error) {
  // If it fails (e.g., missing env vars), catch it and create a fallback app 
  // that returns a helpful JSON error instead of crashing silently
  console.error('Staticman initialization error:', error);
  const express = require('express');
  expressApp = express();
  expressApp.use((req, res) => {
    res.status(500).json({ 
      success: false, 
      error: 'Server initialization failed. Check Vercel logs. Details: ' + error.message 
    });
  });
}

// 1. Export the app for Vercel serverless functions
module.exports = expressApp;

// 2. Only start the traditional server if we are NOT on Vercel
if (process.env.VERCEL !== '1') {
  try {
    const StaticmanAPI = require('./server');
    const api = new StaticmanAPI();
    api.start(port => {
      console.log('Staticman API running on port', port);
    });
  } catch (error) {
    console.error('Local start error:', error);
  }
}
