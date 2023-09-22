import mongoose from "mongoose";

const { Schema } = mongoose;

const studentSchema = new Schema({
    name: String,
    age: Number,
    mark1: Number,
    mark2: Number,
    mark3: Number,
  });

  export default mongoose.model('Student', studentSchema)