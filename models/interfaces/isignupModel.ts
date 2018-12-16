import { Document, Model, model, Schema} from "mongoose";

export interface IUserModel extends Document {
    firstName: String,
    lastName: String,
    username: String,
    phone: Number,
    password: String,
    confirmPassword: String,
    created_date: Date
};