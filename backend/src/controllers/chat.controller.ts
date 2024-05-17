import { selectChatlist } from '@databases/chat/selectChatlist.database';
import { databaseConnector } from '@middlewares/databaseConnector.middleware';
import { Controller } from '@schemas/controller.schema';
import { partnerChatlistSchema } from '@schemas/chat.schema';
import CustomError from '@src/error';
import http from 'http-status-codes';

export const getChatlist: Controller = async (req, res) => {
  const { user_id, email } = req.body;

  const chatlist = await databaseConnector(selectChatlist)(parseInt(user_id), email);
  const validationResult = partnerChatlistSchema.validate(chatlist[0]);
  if (validationResult.error)
    throw new CustomError(http.NOT_FOUND, '일치하는 정보를 얻지 못했습니다', validationResult.error);

  res.status(http.OK).json(chatlist);
};

export const deleteRelationship: Controller = async (req, res) => {
  const email = req.body.email;
  const user2_id = req.params.user2_id;

  // await databaseConnector(archiveCouple)(email, user2_id);
};
