import e from "express";

export interface ReviewAddRequest {
    restaurantId:number,
    userId: number,
    rating: number,
    content: string
}

export const bodyToReview = (body: ReviewAddRequest) => {
  return {
    restaurantId: body.restaurantId,
    userId: body.userId,
    rating: body.rating,
    content: body.content
  }
};

export interface ReviewAddResponse {
  id: number;
  restaurantId: number;
  userId: number;
  rating: number;
  content: string;
  createdAt:string;
}

export const responseFromReview = (review: ReviewAddResponse) =>{
    return{
        id: review.id,
        restaurantId: review.restaurant_id,
        userId: review.user_id,
        rating: review.rating,
        content: review.content,
        createdAt: review.created_at
    }
}