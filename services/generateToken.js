
import jwt from 'jsonwebtoken'
export async function generateToken(userFromDB) {
    
    const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY, { expiresIn: "7d" });
    return {  token };
}