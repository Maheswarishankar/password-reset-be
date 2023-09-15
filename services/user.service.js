import { ObjectId } from 'mongodb';
import { client } from "../index.js";

export async function userSignup(username, email, finalHash) {
    return await client
        .db('password')
        .collection('register')
        .insertOne({ username, email, password: finalHash });
}

export async function getUserByEmail(email) {
    return await client
        .db('password')
        .collection('register')
        .findOne({ email: email });
}

export async function tokenVerify(decode) {
    return await client
        .db('password')
        .collection('register')
        .findOne({ _id: new ObjectId(`${decode.id}`) });
    // return await client
    //     .db('oauth')
    //     .collection('register')
    //     .findOne({ _id: decode.id });
}

export async function isTokenVerified(token) {
    return await client
        .db("password")
        .collection("register")
        .findOne(
            {
                resetPasswordToken: token,
                expiresIn: { $gt: Date.now() },
            });
}