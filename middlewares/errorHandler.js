const { constance } = require ("../constance.js")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({message : err.message, stackTrace : err.stack})
    switch(statusCode) {
        case constance.VATIDATION_ERROR :
            res.json({ title : "Validation Failed", message : err.message });
            break;

        case constance.UNAUTHORIZED :
            res.json({ title : "Unauthorized Access", message : err.message });
            break;

        case constance.FORBIDDEN :
                res.json({ title : "Forbidden", message : err.message });
                break;

        case constance.NOT_FOUND :
            res.json({ title : "NOT FOUND", message : err.message });
            break;

        case constance.SERVER_ERROR :
                res.json({ title : "Issue with the Server", message : err.message });
                break;
        
        default:
            console.log("No Error, Go Ahead !")
            break;
    } 
}

module.exports= errorHandler;