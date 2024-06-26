const { constants } = require ("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log(statusCode);
    res.json({message : err.message, stackTrace : err.stack})
    // May be there is a problem in switch case
    switch(statusCode) {
        case constants.VATIDATION_ERROR :
            console.log(statusCode);
            res.json({ title : "Validation Failed", message : err.message });
            break;

        case constants.UNAUTHORIZED :
            res.json({ title : "Unauthorized Access", message : err.message });
            break;

        case constants.FORBIDDEN :
                res.json({ title : "Forbidden", message : err.message });
                break;

        case constants.NOT_FOUND :
            res.json({ title : "NOT FOUND", message : err.message });
            break;

        case constants.SERVER_ERROR :
                res.json({ title : "Issue with the Server", message : err.message });
                break;
        
        default:
            console.log("No Error, Go Ahead !")
            break;
    } 
}

module.exports= errorHandler;