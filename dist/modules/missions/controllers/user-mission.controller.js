var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Post, Response, Route, Tags, Path } from "tsoa";
import { missionStart } from "../services/user-mission.service.js";
import { success } from "../../../common/responses/response.js";
let UserMissionController = class UserMissionController extends Controller {
    /**
     * @summary 미션 시작을 요청하는 엔드포인트입니다.
     * @param userId
     * @param body
     * @returns { MissionStartResponse } 미션 시작 결과
     */
    async handleStartMission(userId, body) {
        console.log("미션 시작을 요청했습니다.");
        console.log("body:", body);
        const mission = await missionStart({ ...body, userId });
        return success(mission);
    }
};
__decorate([
    Post("{userId}/missions"),
    Response(200, "미션 시작 성공"),
    Response(409, "이미 진행 중이거나 완료한 미션 — AlreadyChallengingMissionError (M002)", {
        resultType: "FAIL",
        error: {
            errorCode: "M002",
            reason: "이미 해당 미션을 진행 중이거나 완료했습니다.",
            data: null,
        },
        data: null,
    }),
    __param(0, Path()),
    __param(1, Body())
], UserMissionController.prototype, "handleStartMission", null);
UserMissionController = __decorate([
    Route("users"),
    Tags("UserMission")
], UserMissionController);
export { UserMissionController };
//# sourceMappingURL=user-mission.controller.js.map