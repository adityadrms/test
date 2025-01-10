const { ResponseError } = require('../error/response.error');

const errorMiddleware = (error, req, res, next) => {
  if (!error) {
    return next();
  }

  if (error instanceof ResponseError) {
    return res
      .status(error.status)
      .json({
        message: error.message,
      })
  }

  if (error instanceof SyntaxError && error.status == 400 && "body" in error) {
    return res
      .status(400)
      .json({
        message: "Bad Request: Invalid JSON format",
      })
  }

  console.error(error);

  return res
    .status(500)
    .json({
      message: error.message || "Internal Server Error",
    })
};

module.exports = { errorMiddleware };
