import * as reviewService from './reviewService' ;
import 'next';
import { NextApiRequest, NextApiResponse } from 'next';

export const createReview = async(req: NextApiRequest , res: NextApiResponse) => {
    // ensure that body has a rating and a description
    // retrieve description and rating from req
    const {userId, rating, description} = req.body

    if (!userId || !rating || !description) {
        return res.status(400).json({ message: 'There are missing entries are required' });
      }

    const newReview = await reviewService.createReview(userId, rating, description)

    // respond with the created review
    res.status(201).json(newReview);

};