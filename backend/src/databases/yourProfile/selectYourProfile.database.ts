import { ProfileInfo } from '@models/user.model';
import CustomError from '@src/error';
import http from 'http-status-codes';
import { Connection } from 'mysql2/promise';

export const selectYourProfile = async (conn: Connection, user1_id: number, user2_id: number): Promise<ProfileInfo> => {
  let sql = 'select id from couple where user1_id = :user1_id and user2_id = :user2_id';
  let values: {} = { user1_id: user1_id, user2_id: user2_id };
  let [result] = await conn.execute(sql, values);
  if (!result[0]) throw new CustomError(http.NOT_FOUND, '서로 좋아요 상태가 아닌 사용자들');

  sql = 'select email, nickname, picture_url from user where id = :user2_id';
  values = { user2_id: user2_id };
  [result] = await conn.execute(sql, values);
  return result[0] as ProfileInfo;
};
