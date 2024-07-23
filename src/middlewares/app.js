const baseCors = require("cors");

const whitelistOrigins = ["http://localhost:4000"];
const cors = baseCors({
  origin: function (origin, callback) {
    callback(null, true);
  },
  credentials: true,
});

module.exports = { cors };
