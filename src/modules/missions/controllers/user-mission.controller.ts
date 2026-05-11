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

import { MissionStartRequest, MissionStartResponse } from "../dtos/user-mission.dto.js";
import { missionStart } from "../services/user-mission.service.js";

import { ApiResponse, success } from "../../../common/responses/response.js";

@Route("users")
@Tags("UserMission")
export class UserMissionController extends Controller{ 

    @Post("{userId}/missions")
    public async handleStartMission(
        @Path() userId: number,
        @Body() body: MissionStartRequest
    ): Promise<ApiResponse<MissionStartResponse>>{
        console.log("미션 시작을 요청했습니다.");
        console.log("body:", body);
        const mission = await missionStart({...body, userId});
        return success(mission);
    }
}
