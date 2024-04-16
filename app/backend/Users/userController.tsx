import { error } from 'console';
import * as userService from './UserService' ;
import 'next';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export const createUser = async(req: NextRequest , res: NextResponse) => {

    //ensure that body has a username and password
    //retrieve user name and password from req
    //const data  = await req.get();
    console.log("I GOT HERE HELPPPP!!!");
    //const {username,password,email} = data;
    const request_data = await req.formData();

    const username = request_data.get("username") as string;
    const password = request_data.get("password") as string;
    const email = request_data.get("email") as string;

  
    if (!username || !password || !email) {
       console.log(username,password,email)
       console.log("I GOT AN ERROR HELPPPP!!!");
       return NextResponse.error();
    }
    const newUser = await userService.createUser(email,username,password);
    // Respond with the created user
    console.log()
    return newUser;

};






