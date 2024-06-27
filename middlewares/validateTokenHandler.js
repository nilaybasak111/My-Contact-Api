const asyncHandler = require ("express-async-handler");
const jwt = require ("jsonwebtoken");

const validateToken = asyncHandler (async (req,res,next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        // Here we split Bearer from authheader
        token = authHeader.split(" ") [1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
            if (err) {
                res.status(401);
                throw new Error ("User is not Authorized");
            } 
            console.log(decoded);
            // Here we Verified the Token, Then took the decoded.user & Put it in req.user
            req.user = decoded.user;
            next();
        });
        if (!token) {
            res.status(401);
            throw new Error ("Unauthorized User or Invalid Token");
        }
    }
});

module.exports = validateToken;