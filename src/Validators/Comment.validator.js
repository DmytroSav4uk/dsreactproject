import Joi from "joi";

const commentValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-ZА-Яа-яёЁґҐєЄ ]{1,20}$/).required().messages({'string.pattern.base':'Letters only min 1 max 20 symbols'}),
    email:Joi.string().email({ tlds: { allow: false } }).required(),
    body:Joi.string().regex(/^[a-zA-ZА-Яа-яёЁґҐєЄіІ ]{1,1000}$/).required().messages({'string.pattern.base':'min 1 max 1000 symbols '}),
})

export {commentValidator};