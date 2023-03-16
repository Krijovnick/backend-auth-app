const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please, provide an email!"],
        unique: [true, "Email exist"]
    },
    password: {
        type: String,
        required: [true, "Please, provide a password"],
        unique: false
    }
});

module.exports = model.Users || model("Users", UserSchema);