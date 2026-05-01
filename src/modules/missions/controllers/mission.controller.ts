import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { MissionAddRequest, bodyToMission } from "../dtos/mission.dto.js";
import { missionAdd } from "../services/mission.service.js";

export const handleAddMission = async(req: Request, res: Response, next: NextFunction) => {
    console.log("미션 추가를 요청했습니다.");
    console.log("body:", req.body);

    const restaurantId = Number(req.params.restaurantId);
    const { point, mealPrice, dueDate } = req.body; 

    // 서비스 로직 호출
    const mission = await missionAdd(bodyToMission({
        restaurantId,
        point,
        mealPrice,
        dueDate
    } as MissionAddRequest));
    // 성공 응답 보내기
    res.status(StatusCodes.OK).json({result:mission});
}