import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().regex(/^[a-zA-ZА]{1,20}$/).required().messages({
        'string.pattern.base':'English letters only min 1 max 20 symbols no spaces'}),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required(),
});


export {
    carValidator
}