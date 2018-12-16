import { Document, Schema, Model, model} from "mongoose";

import {IUserModel} from './interfaces/isignupModel'

const User = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    username: {
        type: String,
        required: 'Enter a username'            
    },
    phone: {
        type: Number
    },
    password: {
        type: String,
        required: 'Enter a password'            
    },
    confirmPassword: {
        type: String,
        required: 'Enter a confirm password'            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
},
{ 
    collection: 'Users' 
});


export const userModel: Model<IUserModel> = model<IUserModel>("User", User);

