import passport from "passport";
// 보호된 라우트
export const isLogin = passport.authenticate('jwt', { session: false });
//# sourceMappingURL=auth.middleware.js.map