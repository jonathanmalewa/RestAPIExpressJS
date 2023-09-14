const logRequest = (req, res, next) => {
  console.log("log req ke", req.path);
};

module.exports = logRequest();
