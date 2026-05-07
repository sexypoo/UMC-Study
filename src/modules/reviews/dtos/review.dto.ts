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

// 단일 response
export const responseFromReview = (review: ReviewAddResponse) =>{
    return{
        id: review.id,
        restaurantId: review.restaurantId,
        userId: review.userId,
        rating: review.rating,
        content: review.content,
        createdAt: review.createdAt
    }
}

export interface ReviewItem {
  id: number;
  restaurantId: number;
  userId: number;
  rating: number;
  content: string;
  createdAt: string;
  user: {
    name: string;
  };
}

export interface ReviewListResponse {
  data: ReviewItem[];
  pagination: {
    cursor: number | null;
  };
}

export const responseFromReviews = (reviews: ReviewItem[]): ReviewListResponse => {
  const lastReview = reviews[reviews.length - 1];
  return {
    data: reviews,
    pagination: {
      cursor: lastReview ? lastReview.id : null,
    },
  };
};