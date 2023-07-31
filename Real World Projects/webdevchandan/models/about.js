import { Schema, model, models } from "mongoose";

const AboutSchema = new Schema({
    text: {
        type: String,
    },
});

const About = models?.About || model("About", AboutSchema);

export default About;