// import jwt from 'jsonwebtoken'

// const authMiddleware = async(req, res, next) =>{

//     // getting the token from req.headers
//     const {token} = req.headers;
//     if(!token)
//         {
//             return res.json({success:false,message:"Not authorized,Login again"})
//         }

//         try {
//             // decoding the token
//             const token_decode = jwt.verify(token,process.env.JWT_SECRET)
//             // converting token into userId
//             // with the help of userId we will add, remove,get data
//             req.body.userId = token_decode.id;
//             next();
//         } catch (error) {

//             console.log(error)
//             res.json({success:false, message:"Error"})
//         }

// }

// export default authMiddleware;

/////////////////////////////////////////////////////

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Invalid token", error: err.message });
    }

    req.user = decoded;
    next();
  });
};

export default authMiddleware;
