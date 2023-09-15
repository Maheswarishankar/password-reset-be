import jwt from 'jsonwebtoken'
import { tokenVerify } from "../services/user.service.js";

const verifyToken = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) res.status(401).json({ message: "missing Token" })

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, async (err, decode) => {
        if (err) res.status(403).json({ message: "invalid Token" })

        const user = await tokenVerify(decode); //!DB

        // console.log(user);
        if (!user) res.status(404).json({ message: "User not found" })

        req.user = user

        next();
    })



}

export default verifyToken