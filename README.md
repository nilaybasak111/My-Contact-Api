In env add--
const PORT= 3001;
CONNECTION_STRING = MongoDb Url
ACCESS_TOKEN_SECRET = JWT Sceret

// register route works fine,dublicate id works fine
// login working fine, returning JWT Token
// Check delete oporation in (controllers\contactscontroller.js) is it working fine or not
// All Things Working Fine
// But there is some error with switch case in (../middlewares/errorHandler.js)