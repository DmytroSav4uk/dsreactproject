import Joi from "joi";



const userValidator = Joi.object({


    name:Joi.string().regex(/^[a-zA-ZА-Яа-яёЁґҐєЄ]{1,20}$/).required().messages({

        'string.pattern.base':'Letters only min 1 max 20'
    }),
    username:Joi.string().regex(/^[a-zA-ZА-Яа-яёЁґҐєЄ\d]{1,20}$/).required().messages({'string.pattern.base':'min 1 max 20 symbols'}),
    email:Joi.string().email({ tlds: { allow: false } }).required().messages({'string.pattern.base':'invalid email example: user@gmail.com'})
})


export {userValidator};