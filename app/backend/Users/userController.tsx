import * as userService from './UserService' ;
import 'next';
import { NextApiRequest, NextApiResponse } from 'next';

export const createUser = async(req: NextApiRequest , res: NextApiResponse) => {

    //ensure that body has a username and password
    //retrieve user name and password from req
    const {username,password,email} = req.body

    if (!username || !password || !email) {
        return res.status(400).json({ message: 'There are missing entries are required' });
      }

    const newUser = await userService.createUser(email,username,password)

    // Respond with the created user
    res.status(201).json(newUser);

};