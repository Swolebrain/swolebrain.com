var mongoose = require('mongoose');
var crypto = require('crypto');


// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    },

	completedproblems: [String]
});

userSchema.methods.generateHash = function(password) {
    return crypto.createHash("md5").update(password).digest('hex');
};

userSchema.methods.validPassword = function(password) {
    return this.generateHash(password) == this.local.password;
};

module.exports = mongoose.model("User", userSchema);
