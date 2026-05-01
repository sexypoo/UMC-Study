import { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../../../db.config.js";

export const getUserMissionByUserIdAndMissionId = async (
  userId: number,
  missionId: number
): Promise<any | null> => {
  const conn = await pool.getConnection();

  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT EXISTS(
        SELECT 1 FROM user_mission 
        WHERE user_id = ? AND mission_id = ? AND status = '진행중'
      ) as isAlreadyChallenging;`,
      [userId, missionId]
    );

    return rows[0]?.isAlreadyChallenging;  // 0 또는 1
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  } finally {
    conn.release();
  }
};

export const addUserMission = async (data: any): Promise<number | null> => {
  const conn = await pool.getConnection();

    try{
    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO user_mission (user_id, mission_id, status) VALUES (?, ?, ?);`,
      [
        data.userId,
        data.missionId,
        data.status
      ]
    );

    return result.insertId;
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  } finally {
    conn.release();
  }
};

export const getUserMission = async (userMissionId: number): Promise<any | null> => {
  const conn = await pool.getConnection();

  try {
    const [user_mission] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM user_mission WHERE id = ?;`,
      [userMissionId]
    );

    if (user_mission.length === 0) {
      return null;
    }

    return user_mission[0]; // 배열의 첫 번째 요소(리뷰 정보)를 반환합니다.
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  } finally {
    conn.release();
  }
};
