import mongoose from "mongoose";

const ToDoSchema = mongoose.Schema({
    email: {type:String, required:true},
    title: {type:String, required:true},
    description: {type:String, required:true},
    status: {type:String, required:true}
}, {versionKey:false, timestamps:true});

const ToDoModel = mongoose.model("ToDoList", ToDoSchema);

export default ToDoModel;