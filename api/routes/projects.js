var express = require('express');
var router = express.Router();
const { auth } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
  audience: 'https:tasktracker/api',
  issuerBaseURL: `https://dev-ugfsod-i.us.auth0.com/`,
});

router.get('/', function(req, res, next) {
  res.json({
    "message": "API is working correctly"
  })
});

router.get('/public', function(req, res, next) {
  res.json({
    "message": "This is a public endpoint"
  })
})

router.get('/private', checkJwt, function(req, res, next) {
  res.json({
    "message": "This is a private endpoint"
  })
})

module.exports = router;
