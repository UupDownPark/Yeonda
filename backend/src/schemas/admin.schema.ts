import 'dotenv/config';
import Joi from 'joi';

export const AdminSchema = Joi.object({
  user_id: Joi.number().valid(parseInt(process.env.ADMIN_ID)).required(),
  email: Joi.string().valid(process.env.ADMIN_EMAIL).required(),
});

export interface statistic {
  today: number;
  weekly_diary_count: [number, number, number, number, number, number, number];
  weekly_matching_count: [number, number, number, number, number, number, number];
  weekly_user_count: [number, number, number, number, number, number, number];
}

export interface analysis {
  male_count: number;
  female_count: number;
  average_diary: { date: string; avg: number }[];
  twoWeeksUserList: { id: number; email: string; picture_url: string }[];
}

export const statisticSchema = Joi.object({
  today: Joi.number().integer().min(0).max(6).required(),
  weekly_diary_count: Joi.array().items(Joi.number().integer().min(0)).length(7).required(),
  weekly_matching_count: Joi.array().items(Joi.number().integer().min(0)).length(7).required(),
  weekly_user_count: Joi.array().items(Joi.number().integer().min(0)).length(7).required(),
});

export const analysisSchema = Joi.object({
  male_count: Joi.number().integer().min(0).required(),
  female_count: Joi.number().integer().min(0).required(),
  average_diary: Joi.array()
    .items(
      Joi.object({
        date: Joi.string().isoDate().required(),
        avg: Joi.number().min(0).required(),
      }),
    )
    .min(0)
    .required(),
  twoWeeksUserList: Joi.array()
    .items(
      Joi.object({
        id: Joi.number().integer().min(0).required(),
        email: Joi.string().email().required(),
        picture_url: Joi.string().allow(null).required(),
      }),
    )
    .min(0)
    .required(),
});
