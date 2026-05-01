import { MissionStartRequest } from "../dtos/user-mission.dto.js"; //인터페이스 가져오기 
import { responseFromStartMission } from "../dtos/user-mission.dto.js";
import {
  addUserMission,
  getUserMission,
} from "../repositories/user-mission.repository.js";

import { getUserMissionByUserIdAndMissionId } from "../repositories/user-mission.repository.js";

export const missionStart = async (data: MissionStartRequest) => {

  const isAlreadyChallenging = await getUserMissionByUserIdAndMissionId(
    data.userId,
    data.missionId
  );

  if (isAlreadyChallenging) {
    throw new Error("이미 도전 중인 미션이에요.");
  }

  const userMissionId = await addUserMission({
    userId: data.userId,
    missionId: data.missionId,
    status: data.status
  });

  if (userMissionId == null){
    throw new Error("mission 등록에 실패하였습니다.")
  }

  const userMission = await getUserMission(userMissionId);

  return responseFromStartMission(userMission);
};