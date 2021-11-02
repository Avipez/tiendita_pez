function logErrors(error, req, resp, next) {
  console.log("log errors");
  console.error(error);
  next(error);
}

function errorHandler(error, req, resp, next) {
  console.log("error handler");
  resp.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

function boomErrorHandler(error, req, resp, next) {
  if (error.isBoom) {
    const { output } = error;
    resp.status( output.statusCode).json(output.payload);
  }
  next(error);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
