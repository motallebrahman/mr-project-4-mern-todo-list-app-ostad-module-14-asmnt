import mongoose from "mongoose";

const ToDoSchema = mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    status: {type:String, required:true}
}, {versionKey:false});

const ToDoModel = mongoose.model("ToDoList", UsersSchema);

export default ToDoModel;