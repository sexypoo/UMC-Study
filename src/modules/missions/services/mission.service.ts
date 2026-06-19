import { MissionAddRequest } from "../dtos/mission.dto.js"; //인터페이스 가져오기 
import {
  addMission,
  getMission,
} from "../repositories/mission.repository.js";

import {getRestaurantById} from "../../restaurants/repositories/restaurant.repository.js";
import { MissionAddError, RestaurantNotFoundError } from "../../../common/errors/errors.js";

export const missionAdd = async (data: MissionAddRequest) => {

    const restaurant = await getRestaurantById(data.restaurantId);
    if (!restaurant) {
        throw new RestaurantNotFoundError("존재하지 않는 가게예요.");
    }

  const missionId = await addMission({
    restaurantId: data.restaurantId,
    point: data.point,
    mealPrice: data.mealPrice,
    dueDate: data.dueDate
  });

  if (missionId == null){
    throw new MissionAddError("mission 등록에 실패하였습니다.")
  }

  const mission = await getMission(Number(missionId));

  return mission;
};
