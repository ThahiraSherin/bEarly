//Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    //set default status code and message
    const statusCode = err.statusCode === 200 ? 500 : err.statusCode;

    res.status(statusCode).json({ message: 'Server Error', error: err.message,
        //include stack trace only in development mode
        stack : process.env.NODE_ENV === 'production' ? null : err.stack
     });
}

module.exports = errorHandler;