import { ReviewListResponse, responseFromReviews } from "../../reviews/dtos/review.dto.js";
import { getAllRestaurantReviews } from "../repositories/restaurant.repository.js";

import { MissionListResponse, responseFromMissions } from "../../missions/dtos/mission.dto.js";
import { getAllRestaurantMissions } from "../../missions/repositories/mission.repository.js"

export const listRestaurantReviews = async(
    restaurantId: number,
    cursor: number
): Promise<ReviewListResponse> => {
    const reviews = await getAllRestaurantReviews(restaurantId, cursor);
    return responseFromReviews(reviews);
}

export const listRestaurantMissions = async(
    restaurantId: number,
    cursor: number
): Promise<MissionListResponse> => {
    const missions = await getAllRestaurantMissions(restaurantId, cursor);
    return responseFromMissions(missions);
}