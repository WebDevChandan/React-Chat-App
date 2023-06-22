const express = require("express");
const mongoose = require("mongoose");

//As the connection established, it return promise
//27017: Port Number, Localhost Address: localhost === 127.0.0.1, Sample: Database Name
mongoose.connect("mongodb://localhost:27017/Sample", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to MongoDB Successfully");
}).catch((err) => {
    console.log(err);
})

//First we need to create Schema & Model
//SCHEMA (It is like Documents)
const student = mongoose.Schema({
    name: String,
    workout: Boolean,
    height: Number
})

//MODEL (it is like Collections)
//Note: MongoDB automatically add 's' at the beigning of the Collection and make it lowercase
const Student = mongoose.model("Student", student);

//Create Document
const adder = async () => {

    //#1 Way of Inserting Document
    // const stdDoc = new Student({
    //     name: "Chandan",
    //     workout: false,
    //     height: 5.6
    // });

    // //This would return Promise, either true or false (Fullfilled or Rejected).
    // await stdDoc.save();

    //#2 Way of Inserting Document
    const stdDoc =  await Student.create({
        name: "Aditya",
        workout: false,
        height: 6.0
    });

}
// adder();


//READ Document
const reader = async () => {

    //Reading All Student Document
    const allStdDoc = await Student.find();
    // console.log(stdDoc);


    //Reading All Student Document having height === 5.6. Using equalto Operator
    const stdWithEqHght = await Student.find({ height: { $eq: 5.6 } });
    console.log(stdWithEqHght);

}
reader();




