import UserModel from "../model/UserModel.js";
import jwt from "jsonwebtoken";

export async function registration(req, res) {
    try {
      const reqBody = req.body;
      await UserModel.create(reqBody);
      return res.json({ status: "success", message: "Registration successful" });
    } catch (error) {
      return res.json({ status: "failed", message: error });
    }
  }


  export async function login(req, res) {
    try {
      const reqBody = req.body;
      let user = await UserModel.find(reqBody);
      if (user.length > 0) {

        // JWT Token Implementation

        let Payload = {exp:Math.floor(Date.now() / 1000)+(24*60*60),data:reqBody['email']};
        let token = jwt.sign(Payload, "81ES}Vn09}O9!dQP1TF=,T=x.1XhQCgs5sBz%$x;qaZAAT{(_{");

        res.json({ status: "success", message: "User Found", token:token });

      }else{
        res.json({ status: "failed", message: "User Not Found" });
      }
      return res.json({ status: "success", message: "Login successful" });
    } catch (error) {
      return res.json({ status: "failed", message: error });
    }
  }