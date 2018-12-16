import * as express from  'express';
import {UserDetails} from '../repository/userDetails';
import { request } from 'https';

const userDetails = new UserDetails();


export function signUp(req: express.Request, res: express.Response){
    var body = req.body;
    return new Promise(function(resolve, reject) {
        userDetails.saveUserDetails(body, (response:any)=>{
            if(response){
                return res.send({'users':response.firstName});
                //resolve("Created");
            }
        });     
    })
}