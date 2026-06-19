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
import { missionAdd } from "../services/mission.service.js";
import { success } from "../../../common/responses/response.js";
let MissionController = class MissionController extends Controller {
    /**
     * @summary 식당에 미션을 추가할 수 있는 엔드포인트입니다.
     * @param restaurantId
     * @param body
     * @returns { MissionAddResponse } 미션 추가 결과
     */
    async handleAddMission(restaurantId, body) {
        console.log("미션 추가를 요청했습니다.");
        console.log("body:", body);
        const mission = await missionAdd({ ...body, restaurantId });
        return success(mission);
    }
};
__decorate([
    Post("{restaurantId}/missions"),
    Response(200, "미션 추가 성공"),
    Response(404, "존재하지 않는 유저 또는 미션 — NotFoundError"),
    __param(0, Path()),
    __param(1, Body())
], MissionController.prototype, "handleAddMission", null);
MissionController = __decorate([
    Route("restaurants"),
    Tags("Mission")
], MissionController);
export { MissionController };
//# sourceMappingURL=mission.controller.js.map