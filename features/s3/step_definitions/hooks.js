var { S3 } = require("../../../clients/client-s3");

module.exports = function() {
  this.Before({ tags: ["@s3"] }, function(scenario, callback) {
    this.service = this.s3 = new S3({
      maxRetries: 100
    });
    callback();
  });
};
