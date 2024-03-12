import ToDoModel from "../model/ToDoModel.js";

export const createToDo = async(req, res)=>  {
    try {
      const email = req.headers['email'];
      const reqBody = req.body;
      reqBody.email = email;

      await ToDoModel.create(reqBody);
      
      return res.json({ status: "success", message: "ToDo created successfully" });
    } catch (error) {
      return res.json({ status: "failed", message: error });
    }
  }

  export const read = async(req, res)=> {
    try {
      let email = req.headers['email'];
      let result = await ToDoModel.find({email:email});
      return res.json({status: "success", data:result}); 
    } catch (error) {
      return res.json({ status: "failed", message: error });
    }
  }


  export const updateToDo = async(req, res)=>  {
    try {
      const email = req.headers['email'];
      let {id} = req.params;
      const reqBody = req.body;
      await ToDoModel.updateOne({_id:id, email:email}, reqBody);
      return res.json({ status: "success", message: "ToDo updated successfully" });
    } catch (error) {
      return res.json({ status: "failed", message: error });
    }
  }

  export const deleteToDo = async(req, res)=>  {
    try {
      const email = req.headers['email'];
      let {id} = req.params;
      const reqBody = req.body;
      await ToDoModel.deleteOne({_id:id, email:email}, reqBody);
      return res.json({ status: "success", message: "ToDo deleted successfully" });
    } catch (error) {
      return res.json({ status: "failed", message: error });
    }
  }

