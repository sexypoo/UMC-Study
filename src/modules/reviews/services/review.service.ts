import { ReviewAddRequest } from "../dtos/review.dto.js"; //인터페이스 가져오기 
import { responseFromReview } from "../dtos/review.dto.js";
import {
  addReview,
  getReview,
} from "../repositories/review.repository.js";

import {getRestaurantById} from "../../restaurants/repositories/restaurant.repository.js";

export const reviewAdd = async (data: ReviewAddRequest) => {

    const restaurant = await getRestaurantById(data.restaurantId);
    if (!restaurant) {
        throw new Error("존재하지 않는 가게예요.");
    }

  const reviewId = await addReview({
    restaurantId: data.restaurantId,
    userId: data.userId,
    rating: data.rating,
    content: data.content
  });

  if (reviewId == null){
    throw new Error("review 등록에 실패하였습니다.")
  }

  const review = await getReview(reviewId);

  return responseFromReview(review);
};