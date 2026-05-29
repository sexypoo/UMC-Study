var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Response, Route, Tags, Path, Query } from "tsoa";
import { listRestaurantReviews, listRestaurantMissions } from "../services/restaurant.service.js";
import { success } from "../../../common/responses/response.js";
let RestaurantController = class RestaurantController extends Controller {
    /**
     * @summary 식당별 리뷰를 조회하는 엔드포인트입니다.
     * @param resId
     * @param cursor
     */
    async handleListRestaurantReviews(resId, cursor = 0) {
        const reviews = await listRestaurantReviews(resId, cursor);
        return success(reviews);
    }
    /**
     * @summary 식당별 미션을 조회할 수 있는 엔드포인트입니다.
     * @param resId
     * @param cursor
     */
    async handleListRestaurantMissions(resId, cursor = 0) {
        const missions = await listRestaurantMissions(resId, cursor);
        return success(missions);
    }
};
__decorate([
    Get("{resId}/reviews"),
    Response(200, "리뷰 목록 조회 성공"),
    Response(404, "존재하지 않는 식당 — RestaurantNotFoundError (R001)", {
        resultType: "FAIL",
        error: {
            errorCode: "R001",
            reason: "해당 식당을 찾을 수 없습니다.",
            data: null,
        },
        data: null,
    }),
    __param(0, Path()),
    __param(1, Query())
], RestaurantController.prototype, "handleListRestaurantReviews", null);
__decorate([
    Get("{resId}/missions"),
    Response(200, "리뷰 목록 조회 성공"),
    __param(0, Path()),
    __param(1, Query())
], RestaurantController.prototype, "handleListRestaurantMissions", null);
RestaurantController = __decorate([
    Route("restaurants"),
    Tags("Restaurants")
], RestaurantController);
export { RestaurantController };
//# sourceMappingURL=restaurant.controller.js.map