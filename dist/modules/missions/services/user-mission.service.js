import { AlreadyChallengingMissionError, MissionStartError } from "../../../common/errors/errors.js";
import { addUserMission, getUserMission, } from "../repositories/user-mission.repository.js";
import { getUserMissionByUserIdAndMissionId } from "../repositories/user-mission.repository.js";
export const missionStart = async (data) => {
    const isAlreadyChallenging = await getUserMissionByUserIdAndMissionId(data.userId, data.missionId);
    if (isAlreadyChallenging) {
        throw new AlreadyChallengingMissionError("이미 도전 중인 미션이에요.");
    }
    const userMissionId = await addUserMission({
        userId: data.userId,
        missionId: data.missionId,
        status: "진행중"
    });
    if (userMissionId == null) {
        throw new MissionStartError("mission 시작에 실패하였습니다.");
    }
    const userMission = await getUserMission(userMissionId);
    return userMission;
};
//# sourceMappingURL=user-mission.service.js.map