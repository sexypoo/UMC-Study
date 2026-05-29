var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Middlewares, Post, Request, Response, Route, Tags, Path, Query, Patch, } from "tsoa";
import { userSignUp, listUserReviews, listUserMissions, updateUserService } from "../services/user.service.js";
import { success } from "../../../common/responses/response.js";
import { isLogin } from "../../../common/middlewares/auth.middleware.js";
let UserController = class UserController extends Controller {
    /**
     * 회원가입 API
     * @summary 회원가입을 처리하는 엔드포인트입니다.
     * @param body
     * @returns { UserSignUpResponse } 회원가입 결과
     */
    async handleUserSignUp(body) {
        console.log("회원가입을 요청했습니다!");
        console.log("body:", body);
        const user = await userSignUp(body);
        return success(user);
    }
    /**
    * 게스트 페이지
    * @summary 로그인 없이 접근 가능한 게스트 페이지입니다.
    */
    async handleGuestPage() {
        return `
            <h1>게스트 페이지</h1>
            <p>이 페이지는 로그인이 필요 없습니다.</p>
            <ul>
                <li><a href="/api/v1/users/mypage">마이페이지 (로그인 필요)</a></li>
            </ul>
        `;
    }
    /**
     * 로그인 페이지
     * @summary 인증이 필요한 페이지 시 리디렉션되는 로그인 페이지입니다.
     */
    async handleLoginPage() {
        return "<h1>로그인 페이지</h1><p> 로그인이 필요한 페이지에서 튕겨나오면 여기로 옵니다.";
    }
    /**
     * 마이페이지
     * @summary 로그인한 유저만 접근 가능한 마이페이지입니다.
     */
    async handleMypage(req) {
        return `
            <h1>마이페이지</h1>
            <p>환영합니다, ${req.cookies.username}님!</p>
            <p>이 페이지는 로그인한 사람만 볼 수 있습니다.</p>
        `;
    }
    async handleSetLogin(req) {
        req.res.cookie("username", "UMC10th", { maxAge: 3600000 });
        return '로그인 쿠키(username=UMC10th) 생성 완료! <a href="/api/v1/users/mypage">마이페이지로 이동</a>';
    }
    async handleSetLogout(req) {
        req.res.clearCookie("username");
        return '로그아웃 완료 (쿠키 삭제). <a href="/api/v1/users/guest">메인으로</a>';
    }
    /**
     * 유저 리뷰 목록 조회 API
     * @summary 특정 유저가 작성한 리뷰 목록을 반환하는 엔드포인트입니다.
     * @param userId
     * @param cusor
     */
    async handleListUserReview(userId, cursor = 0) {
        const reviews = await listUserReviews(userId, cursor);
        return success(reviews);
    }
    /**
     * 유저 미션 목록 조회 API
     * @summary 특정 유저가 수행중인 미션 목록을 반환하는 엔드포인트입니다.
     * @param userId
     * @param cusor
     */
    async handleListUserMission(userId, cursor = 0) {
        const missions = await listUserMissions(userId, cursor);
        return success(missions);
    }
    /**
     * 유저 정보 수정 API
     * @summary 로그인한 유저 본인의 정보를 수정하는 엔드포인트입니다.
     */
    async handleUpdateUser(req, body) {
        const userId = req.user.id;
        const result = await updateUserService(userId, body);
        return success(result);
    }
};
__decorate([
    Post("signup"),
    Response(200, "회원가입 성공"),
    Response(409, "중복된 이메일 에러", {
        resultType: "FAIL",
        error: {
            errorCode: "U001",
            reason: "이미 사용 중인 이메일입니다.",
            data: null,
        },
        data: null,
    }),
    __param(0, Body())
], UserController.prototype, "handleUserSignUp", null);
__decorate([
    Get("guest")
], UserController.prototype, "handleGuestPage", null);
__decorate([
    Get("login")
], UserController.prototype, "handleLoginPage", null);
__decorate([
    Get("mypage"),
    __param(0, Request())
], UserController.prototype, "handleMypage", null);
__decorate([
    Get("set-login"),
    __param(0, Request())
], UserController.prototype, "handleSetLogin", null);
__decorate([
    Get("set-logout"),
    __param(0, Request())
], UserController.prototype, "handleSetLogout", null);
__decorate([
    Get("{userId}/reviews"),
    Response(200, "리뷰 목록 조회 성공"),
    __param(0, Path()),
    __param(1, Query())
], UserController.prototype, "handleListUserReview", null);
__decorate([
    Get("{userId}/missions"),
    Response(200, "미션 목록 조회 성공"),
    __param(0, Path()),
    __param(1, Query())
], UserController.prototype, "handleListUserMission", null);
__decorate([
    Patch("me"),
    Middlewares(isLogin),
    Response(200, "유저 정보 수정 성공"),
    __param(0, Request()),
    __param(1, Body())
], UserController.prototype, "handleUpdateUser", null);
UserController = __decorate([
    Route("users"),
    Tags("Users")
], UserController);
export { UserController };
//# sourceMappingURL=user.controller.js.map