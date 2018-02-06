'use strict';

const errorFormatter = (error) => {
  const responseError = Object.create(null);
  for (let key in error) {
    if (error.hasOwnProperty(key)) {
      responseError[key] = error[key].msg;
    }
  }
  return responseError;
};

module.exports = {
  errorFormatter: errorFormatter
};