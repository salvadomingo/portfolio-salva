
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');


// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://audiospook.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'sJhZeNvIY3k6Fa76v6GVwQcvGE1Z6SeS',
  issuer: 'https://audiospook.eu.auth0.com/',
  algorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
    const user = req.user;

    if (user && (user[process.env.NAMESPACE + '/role'] === role)) {
      next();
    } else {
      return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
    }
}
