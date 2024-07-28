const ClientErrors = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
});

const ServerErrors = Object.freeze({
          INTERNAL_SERVER_ERROR: 500,
          NOT_IMPLEMENTED : 501
});

const SuccessCodes = Object.freeze({
          OK : 200,
          CREATED : 201  
});

module.exports = {
          ClientErrors,
          ServerErrors,
          SuccessCodes
}

// 400 bad request
// 401 unauthorized
// 402 payment required
// 403 forbidden
// 404 not found
// 406 not acceptable
// 408 request timeout
// 409 conflict
