import { UserSignUpRequest, UserSignUpResponse } from "../dtos/user.dto.js"; //인터페이스 가져오기 
import { responseFromUser } from "../dtos/user.dto.js";
import {
  addUser,
  getUser,
  getUserPreferencesByUserId,
  setPreference,
} from "../repositories/user.repository.js";

import { DuplicateUserEmailError } from "../../../common/errors/errors.js";

import { ReviewListResponse, responseFromReviews } from "../../reviews/dtos/review.dto.js"
import { getAllUserReviews } from "../../reviews/repositories/review.repository.js";

import { getAllUserMissions } from "../../missions/repositories/user-mission.repository.js"

import { UserMissionListResponse, responseFromUserMissions } from "../../missions/dtos/user-mission.dto.js";

import bcrypt from "bcrypt"

export const userSignUp = async (data: UserSignUpRequest) => {

  const hashedPassword = await bcrypt.hash(data.password,10);

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
  const userId = user!.id;
  const preferences = (await getUserPreferencesByUserId(joinUserId)).map(
    (obj) => obj.foodCategory.name,
  );

  return <UserSignUpResponse>{
    userId,
    preferences
  }
};

export const listUserReviews = async(
    userId: number,
    cursor: number
  ): Promise<ReviewListResponse> => {
      const reviews = await getAllUserReviews(userId, cursor);
      return responseFromReviews(reviews);
}

export const listUserMissions = async(
    userId: number,
    cursor: number
  ): Promise<UserMissionListResponse> => {
      const missions = await getAllUserMissions(userId, cursor);
      return responseFromUserMissions(missions);
}