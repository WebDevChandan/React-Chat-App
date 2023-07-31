import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already existed"],
        requried: [true, "Email is Required!"],
        validate: {
            validator: function (email) {
                // Replace 'allowed_email_domain.com' with your desired email domain
                return email === "hirechandan@gmail.com";
            },
            message: 'Only specific email domains are allowed.',
        },
    },
    username: {
        type: String,
        required: [true, "Username is required!"]
    },
    image: {
        type: String,
    }
});

const User = models?.User || model("User", UserSchema);

export default User;