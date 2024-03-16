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

export const updateReview = async(req: NextApiRequest , res: NextApiResponse) => {
  // ensure that body has a rating and a description
  // retrieve description and rating from req
  const {userId, reviewId, rating, description} = req.body

  if (!userId || !reviewId || !rating || !description) {
      return res.status(400).json({ message: 'There are missing entries are required' });
    }

  const updatedReview = await reviewService.updateReview(userId, reviewId, rating, description)

  // respond with the updated review
  res.status(201).json(updatedReview);

};

export const deleteReview = async(req: NextApiRequest , res: NextApiResponse) => {
  // ensure that body has a userid and reviewid
  // retrieve description and rating from req
  const {userId, reviewId} = req.body

  if (!userId || !reviewId) {
    return res.status(400).json({ message: 'There are missing entries are required' });
  }

  const deletedReview = await reviewService.deleteReview(userId, reviewId)

  // respond with the deleted review
  res.status(201).json(deletedReview);

};

export const likeReview = async(req: NextApiRequest , res: NextApiResponse) => {
  // ensure that body has a userid and reviewid
  // retrieve description and rating from req
  const {userId, reviewId} = req.body

  if (!userId || !reviewId) {
    return res.status(400).json({ message: 'There are missing entries are required' });
  }

  const likeReview = await reviewService.likeReview(userId, reviewId)

  // respond with the updated review
  res.status(201).json(likeReview);

};

export const dislikeReview = async(req: NextApiRequest , res: NextApiResponse) => {
  // ensure that body has a userid and reviewid
  // retrieve description and rating from req
  const {userId, reviewId} = req.body

  if (!userId || !reviewId) {
    return res.status(400).json({ message: 'There are missing entries are required' });
  }

  const dislikeReview = await reviewService.dislikeReview(userId, reviewId)

  // respond with the updated review
  res.status(201).json(dislikeReview);

};