import jwt from "jsonwebtoken";

export const Authentication = (req,res,next) => {
    let token = req.headers['token'];
    
jwt.verify(token, "81ES}Vn09}O9!dQP1TF=,T=x.1XhQCgs5sBz%$x;qaZAAT{(_{", (err, decoded)=>{
        if(err){
            return res.status(401).json({message:"Unauthorized"});
        } else{
            let email = decoded['email'];
            req.headers.email = email
            next();
        }
    })
}
    
