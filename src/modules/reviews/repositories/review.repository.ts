import { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../../../db.config.js";

export const addReview = async (data: any): Promise<number | null> => {
  const conn = await pool.getConnection();

    try{
    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO review (restaurant_id, user_id, rating, content) VALUES (?, ?, ?, ?);`,
      [
        data.restaurantId,
        data.userId,
        data.rating,
        data.content
      ]
    );

    return result.insertId;
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  } finally {
    conn.release();
  }
};

export const getReview = async (reviewId: number): Promise<any | null> => {
  const conn = await pool.getConnection();

  try {
    const [review] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM review WHERE id = ?;`,
      [reviewId]
    );

    if (review.length === 0) {
      return null;
    }

    return review[0]; // 배열의 첫 번째 요소(리뷰 정보)를 반환합니다.
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  } finally {
    conn.release();
  }
};
