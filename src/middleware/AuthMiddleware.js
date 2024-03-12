import jwt from "jsonwebtoken";

export const Authentication = (req,res,next) => {
    let token = req.headers['token'];
    
jwt.verify(token, "81ES}Vn09}O9!dQP1TF=,T=x.1XhQCgs5sBz%$x;qaZAAT{(_{", function(err, decoded){
        if(err){
            return res.status(401).json({message:"Unauthorized"});
        } else{
            req.headers.email = decoded['data'];
            next();

        }
    })
}
    
