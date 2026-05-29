import { 
    Body,
    Controller,
    Get,
    Middlewares,
    Post,
    Request,
    Response,
    Route,
    Tags,
    Path,
    Query
} from "tsoa";

import { Request as ExpressRequest } from "express";

import { MissionAddRequest, MissionAddResponse } from "../dtos/mission.dto.js";
import { missionAdd } from "../services/mission.service.js";

import { ApiResponse, success, FailResponse } from "../../../common/responses/response.js";
import { isLogin } from "../../../common/middlewares/auth.middleware.js";

@Route("restaurants")
@Tags("Mission")
export class MissionController extends Controller{ 

    /**
     * @summary 식당에 미션을 추가할 수 있는 엔드포인트입니다.
     * @param restaurantId 
     * @param body 
     * @returns { MissionAddResponse } 미션 추가 결과
     */
    @Post("{restaurantId}/missions")
    @Middlewares(isLogin)
    @Response<ApiResponse<MissionAddResponse>>(200, "미션 추가 성공")
    @Response<FailResponse>(404, "존재하지 않는 유저 또는 미션 — NotFoundError")
    public async handleAddMission(
        @Path() restaurantId: number,
        @Body() body: MissionAddRequest
    ): Promise<ApiResponse<MissionAddResponse>>{
        console.log("미션 추가를 요청했습니다.");
        console.log("body:", body);
        const mission = await missionAdd({...body, restaurantId});
        return success(mission);
    }
}