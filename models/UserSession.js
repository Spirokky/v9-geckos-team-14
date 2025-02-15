const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
  userId: {
    type: String,
    default: ""
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  deleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("UserSession", UserSessionSchema);
