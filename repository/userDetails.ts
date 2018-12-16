import { Document, Schema, Model, model} from "mongoose";
import {userModel} from '../models/signupModel'


export class UserDetails{

    public saveUserDetails(user: any, callback:any){
        userModel.create(user).then((res)=> {
            callback(res);
        })
    }
}
 