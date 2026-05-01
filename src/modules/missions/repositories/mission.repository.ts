import { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../../../db.config.js";

export const addMission = async (data: any): Promise<number | null> => {
  const conn = await pool.getConnection();

    try{
    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO mission (restaurant_id, point, meal_price, due_date) VALUES (?, ?, ?, ?);`,
      [
        data.restaurantId,
        data.point,
        data.mealPrice,
        data.dueDate
      ]
    );

    return result.insertId;
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  } finally {
    conn.release();
  }
};

export const getMission = async (missionId: number): Promise<any | null> => {
  const conn = await pool.getConnection();

  try {
    const [mission] = await pool.query<RowDataPacket[]>(
      `SELECT * FROM mission WHERE id = ?;`,
      [missionId]
    );

    if (mission.length === 0) {
      return null;
    }

    return mission[0];
  } catch (err) {
    throw new Error(`오류가 발생했어요: ${err}`);
  } finally {
    conn.release();
  }
};
