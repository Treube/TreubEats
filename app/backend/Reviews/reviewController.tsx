import * as reviewService from './reviewService' ;
import 'next';
import { NextRequest, NextResponse } from 'next/server';

export const createReview = async(req: NextRequest , res: NextResponse) => {
  // ensure that body has a rating and a description
  // retrieve description and rating from req
  const request_data = await req.formData();
  const userId = parseInt(request_data.get("userId") as string);
  const description = request_data.get("description") as string;
  const rating = parseFloat(request_data.get("rating") as string);

  if (!userId || !rating || !description) {
    console.log(userId,rating);
    return NextResponse.error();
  }

  const newReview = await reviewService.createReview(userId, rating, description)
  return newReview;
};

export const updateReview = async(req: NextRequest , res: NextResponse) => {
  // ensure that body has a rating and a description
  // retrieve description and rating from req
  const request_data = await req.formData();
  const userId = parseInt(request_data.get("userId") as string);
  const reviewId = parseInt(request_data.get("reviewId") as string);
  const description = request_data.get("description") as string;
  const rating = parseFloat(request_data.get("rating") as string);

  if (!userId && !reviewId && (!rating || !description)) {
    console.log(userId,rating);
    return NextResponse.error();
  }

  const updatedReview = await reviewService.updateReview(userId, reviewId, rating, description);
  return updatedReview;
};

export const deleteReview = async(req: NextRequest , res: NextResponse) => {
  // ensure that body has a rating and a description
  // retrieve description and rating from req
  const request_data = await req.formData();
  const userId = parseInt(request_data.get("userId") as string);
  const reviewId = parseInt(request_data.get("reviewId") as string);

  if (!userId && !reviewId) {
    console.log(userId,reviewId);
    return NextResponse.error();
  }

  const deletedReview = await reviewService.deleteReview(userId, reviewId);
  return deletedReview;
};

export const likeReview = async(req: NextRequest , res: NextResponse) => {
  // ensure that body has a userid and reviewid
  // retrieve description and rating from req
  const request_data = await req.formData();
  const userId = parseInt(request_data.get("userId") as string);
  const reviewId = parseInt(request_data.get("reviewId") as string);

  if (!userId && !reviewId) {
    console.log(userId,reviewId);
    return NextResponse.error();
  }
  const likeReview = await reviewService.likeReview(userId, reviewId);
  return likeReview;
};

export const dislikeReview = async(req: NextRequest , res: NextResponse) => {
  // ensure that body has a userid and reviewid
  // retrieve description and rating from req
  const request_data = await req.formData();
  const userId = parseInt(request_data.get("userId") as string);
  const reviewId = parseInt(request_data.get("reviewId") as string);

  if (!userId && !reviewId) {
    console.log(userId,reviewId);
    return NextResponse.error();
  }
  const dislikeReview = await reviewService.dislikeReview(userId, reviewId);
  return dislikeReview;

};