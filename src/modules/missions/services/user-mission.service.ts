import { AlreadyChallengingMissionError, MissionStartError } from "../../../common/errors/errors.js";
import { MissionStartRequest } from "../dtos/user-mission.dto.js"; //인터페이스 가져오기 
import { responseFromStartMission } from "../dtos/user-mission.dto.js";
import {
  addUserMission,
  getUserMission,
} from "../repositories/user-mission.repository.js";

import { getUserMissionByUserIdAndMissionId } from "../repositories/user-mission.repository.js";

export const missionStart = async (data: MissionStartRequest & { userId: number }) => {

  const isAlreadyChallenging = await getUserMissionByUserIdAndMissionId(
    data.userId,
    data.missionId
  );

  if (isAlreadyChallenging) {
    throw new AlreadyChallengingMissionError("이미 도전 중인 미션이에요.");
  }

  const userMissionId = await addUserMission({
    userId: data.userId,
    missionId: data.missionId,
    status: "진행중"
  });

  if (userMissionId == null){
    throw new MissionStartError("mission 시작에 실패하였습니다.")
  }

  const userMission = await getUserMission(userMissionId);

  return userMission;
};