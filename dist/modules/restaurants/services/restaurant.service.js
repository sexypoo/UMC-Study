import { responseFromReviews } from "../../reviews/dtos/review.dto.js";
import { getAllRestaurantReviews } from "../repositories/restaurant.repository.js";
import { responseFromMissions } from "../../missions/dtos/mission.dto.js";
import { getAllRestaurantMissions } from "../../missions/repositories/mission.repository.js";
export const listRestaurantReviews = async (restaurantId, cursor) => {
    const reviews = await getAllRestaurantReviews(restaurantId, cursor);
    return responseFromReviews(reviews);
};
export const listRestaurantMissions = async (restaurantId, cursor) => {
    const missions = await getAllRestaurantMissions(restaurantId, cursor);
    return responseFromMissions(missions);
};
//# sourceMappingURL=restaurant.service.js.map