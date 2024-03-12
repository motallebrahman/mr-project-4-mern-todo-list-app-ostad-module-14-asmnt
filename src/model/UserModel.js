import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
    email: {type:String, required:true},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    mobile: {type:String, required:true},
    password: {type:String, required:true}
}, {versionKey:false});

const UserModel = mongoose.model("users", UsersSchema);

export default UserModel;