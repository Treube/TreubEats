import * as menuItemService from './menuItemService' ;
import 'next';
import { NextApiRequest, NextApiResponse } from 'next';

export const createMenuItem = async(req: NextApiRequest , res: NextApiResponse) => {
    // ensure that body has a name and items
    // retrieve name and items from req
    const {name, description, price, sectionId} = req.body

    if (!name || !description || !price || !sectionId) {
        return res.status(400).json({ message: 'There are missing entries are required' });
      }

    const newMenuItem = await menuItemService.createMenuItem(name, description, price, sectionId)

    // respond with the created review
    res.status(201).json(newMenuItem);

};