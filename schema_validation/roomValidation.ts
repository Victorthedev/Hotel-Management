import Joi, { Schema } from 'joi';

export const createRoomSchema: Schema = Joi.object({
  name: Joi.string().required(),
  roomType: Joi.string().required(), 
  price: Joi.number().required(),
});

export const updateRoomSchema: Schema = Joi.object({
  name: Joi.string(),
  roomType: Joi.string(), 
  price: Joi.number(),
});

export const filterRoomsSchema: Schema = Joi.object({
  search: Joi.string(),
  roomType: Joi.string(),
  minPrice: Joi.number().min(0),
  maxPrice: Joi.number().greater(Joi.ref('minPrice')).when('minPrice', {
    is: Joi.exist(),
    then: Joi.number().required(),
    otherwise: Joi.number(),
  }),
});
