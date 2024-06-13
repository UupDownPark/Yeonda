import JoiDate from '@joi/date';
import JoiBase from 'joi';

const Joi = JoiBase.extend(JoiDate);

export interface Diary {
  id: number;
  user_id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  likes: number;
}

export const DiarySchema = Joi.object({
  id: Joi.number().min(0).strict().required(),
  user_id: Joi.number().min(0).strict().required(),
  title: Joi.string().min(1).max(100).required(),
  content: Joi.string().min(1).max(3000).required(),
  created_at: Joi.date().format('YYYY-MM-DD HH:mm:ss').required(),
  updated_at: Joi.date().format('YYYY-MM-DD HH:mm:ss').allow(null).optional(),
  likes: Joi.number().min(0).strict().required(),
});

export interface DiaryCreate extends Pick<Diary, 'title' | 'content'> {}

export const DiaryCreateSchema = Joi.object({
  title: Joi.string().min(1).max(100).required(),
  content: Joi.string().min(1).max(3000).required(),
});

export interface DiaryUpdate extends Pick<Diary, 'id' | 'title' | 'content'> {}

export const DiaryUpdateSchema = DiaryCreateSchema.concat(
  Joi.object({
    id: Joi.number().integer().positive().strict().required(),
  }),
);
