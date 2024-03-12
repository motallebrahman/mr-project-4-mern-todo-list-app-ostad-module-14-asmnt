import UserModel from "../model/UserModel.js";
import jwt from "jsonwebtoken";

export const registration = async(req, res)=>  {
    try {
      const reqBody = req.body;
      await UserModel.create(reqBody);
      return res.json({ status: "success", message: "Registration successful" });
    } catch (error) {
      return res.json({ status: "failed", message: error });
    }
  }

  export const login = async(req, res)=>  {
    try {
      const reqBody = req.body;
      let user = await UserModel.find(reqBody);
      if (user.length > 0) {

        let Payload = {exp:Math.floor(Date.now() / 1000)+(24*60*60),data:reqBody['email']};
        let token = jwt.sign(Payload, "81ES}Vn09}O9!dQP1TF=,T=x.1XhQCgs5sBz%$x;qaZAAT{(_{");

        return res.json({ status: "success", message: "User Found", token:token });

      }else{
        return res.json({ status: "failed", message: "User Not Found" });
      }
    } catch (error) {
      return res.json({ status: "failed", message: error });
    }
  }

  export const profileDetails = async(req, res)=> {
    try {
      let email = req.headers['email'];
      let result = await UserModel.find({email:email});
      return res.json({status: "success", data:result}); 
    } catch (error) {
      return res.json({ status: "failed", message: error });
    }
  }

  export const profileUpdate = async(req, res)=> {
  try {
    const email = req.headers['email'];
    const reqBody = req.body;

    await UserModel.updateOne({email:email}, reqBody);

    return res.json({ status: "success", message: "User Updated" })
    
  } catch (error) {
    return res.json({ status: "failed", message: error});
  }
}