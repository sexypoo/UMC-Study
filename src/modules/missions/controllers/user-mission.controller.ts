import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { MissionStartRequest, bodyToUserMission } from "../dtos/user-mission.dto.js";
import { missionStart } from "../services/user-mission.service.js";


export const handleStartMission = async(req: Request, res: Response, next: NextFunction) => {
    console.log("미션 등록 요청했습니다.");
    console.log("body:", req.body);

    const userId = Number(req.params.userId);
    const { missionId, status } = req.body; 

    // 서비스 로직 호출
    const user_mission = await missionStart(bodyToUserMission({
        userId,
        missionId,
        status
    } as MissionStartRequest));
    // 성공 응답 보내기
    res.status(StatusCodes.OK).json({result:user_mission});
}

