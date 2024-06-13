import { transactionWrapper } from '@middlewares/transactionWrapper.middleware';
import { getGeoCode } from '@utils/getGeoCode';
import { Connection, ResultSetHeader } from 'mysql2/promise';

export const updateMyAddress = async (conn: Connection, user_id: number, address: string): Promise<void> => {
  let sql = 'select id from address where detail = :detail';
  let values: {} = { detail: address };
  let [result] = await conn.execute(sql, values);
  let address_id;
  if (result[0]?.id) address_id = result[0].id;

  const callback = async (user_id: number, address: string, address_id: number) => {
    if (address_id) {
      sql = 'update user set address_id = :address_id where id = :user_id';
      values = { address_id: address_id, user_id: user_id };
      await conn.execute(sql, values);
    } else {
      const geoCode = await getGeoCode(address);
      sql = 'insert into address (latitude, longitude, detail) values (:latitude, :longitude, :detail)';
      values = { latitude: geoCode.latitude, longitude: geoCode.longitude, detail: address };
      const result = await conn.execute<ResultSetHeader>(sql, values);
      const new_address_id = result[0].insertId;

      sql = 'update user set address_id = :address_id where id = :user_id';
      values = { address_id: new_address_id, user_id: user_id };
      await conn.execute(sql, values);
    }
  };

  await transactionWrapper(conn, callback)(user_id, address, address_id);
};
