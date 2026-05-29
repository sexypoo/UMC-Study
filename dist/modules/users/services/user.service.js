import { addUser, getUser, getUserPreferencesByUserId, setPreference, updateUser } from "../repositories/user.repository.js";
import { DuplicateUserEmailError } from "../../../common/errors/errors.js";
import { responseFromReviews } from "../../reviews/dtos/review.dto.js";
import { getAllUserReviews } from "../../reviews/repositories/review.repository.js";
import { getAllUserMissions } from "../../missions/repositories/user-mission.repository.js";
import { responseFromUserMissions } from "../../missions/dtos/user-mission.dto.js";
import bcrypt from "bcrypt";
export const userSignUp = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const joinUserId = await addUser({
        email: data.email,
        password: hashedPassword,
        name: data.name,
        gender: data.gender,
        birth: new Date(data.birth), // 문자열을 Date 객체로 변환해서 넘겨줍니다. 
        address: data.address,
        detailAddress: data.detailAddress,
        phoneNumber: data.phoneNumber,
    });
    if (joinUserId === null) {
        throw new DuplicateUserEmailError("이미 존재하는 이메일입니다.", data);
    }
    for (const preference of data.preferences) {
        await setPreference(joinUserId, preference);
    }
    const user = await getUser(joinUserId);
    const userId = user.id;
    const preferences = (await getUserPreferencesByUserId(joinUserId)).map((obj) => obj.foodCategory.name);
    return {
        userId,
        preferences
    };
};
export const listUserReviews = async (userId, cursor) => {
    const reviews = await getAllUserReviews(userId, cursor);
    return responseFromReviews(reviews);
};
export const listUserMissions = async (userId, cursor) => {
    const missions = await getAllUserMissions(userId, cursor);
    return responseFromUserMissions(missions);
};
export const updateUserService = async (userId, data) => {
    const updated = await updateUser(userId, {
        ...data,
        birth: data.birth ? new Date(data.birth) : undefined,
    });
    return { userId: updated.id };
};
//# sourceMappingURL=user.service.js.map