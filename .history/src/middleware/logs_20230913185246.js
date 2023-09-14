const logRequest = (req, res, next) => {
  console.log("log req ke", req.path);
  next();
};

module.exports = logRequest;
