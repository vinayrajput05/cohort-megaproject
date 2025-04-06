// TODO: we may need it later
function asyncHandler(requesthandler) {
  return function (req, res, next) {
    Promise.resolve(requesthandler(req, res, next)).catch(function (err) {
      next(err);
    });
  };
}

export default asyncHandler;
