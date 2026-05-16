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

import { Request as ExpressRequest, Response as ExpressResponse } from "express";

import { MissionStartRequest, MissionStartResponse } from "../dtos/user-mission.dto.js";
import { missionStart } from "../services/user-mission.service.js";

import { ApiResponse, success, FailResponse } from "../../../common/responses/response.js";

@Route("users")
@Tags("UserMission")
export class UserMissionController extends Controller{ 

    /**
     * @summary 미션 시작을 요청하는 엔드포인트입니다.
     * @param userId 
     * @param body 
     * @returns { MissionStartResponse } 미션 시작 결과
     */
    @Post("{userId}/missions")
    @Response<ApiResponse<MissionStartResponse>>(200, "미션 시작 성공")
    @Response<FailResponse>(409, "이미 진행 중이거나 완료한 미션 — AlreadyChallengingMissionError (M002)", {
        resultType: "FAIL",
        error: {
            errorCode: "M002",
            reason: "이미 해당 미션을 진행 중이거나 완료했습니다.",
            data: null,
        },
        data: null,
    })
    
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
