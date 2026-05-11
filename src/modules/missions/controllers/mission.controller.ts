import { 
    Body,
    Controller,
    Get,
    Middlewares,
    Post,
    Request,
    Res,
    Route,
    Tags,
    Path,
    Query
} from "tsoa";

import { Request as ExpressRequest } from "express";

import { MissionAddRequest, MissionAddResponse, bodyToMission } from "../dtos/mission.dto.js";
import { missionAdd } from "../services/mission.service.js";

import { ApiResponse, success } from "../../../common/responses/response.js";

@Route("restaurants")
@Tags("Mission")
export class MissionController extends Controller{ 

    @Post("{restaurantId}/missions")
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