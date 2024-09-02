const joi = require("joi")


const addUser = {

    payload: joi.object({
        name: joi.string().min(3).required().description("Add User Name Here")
    }),
    failAction: (req, h, err) => {
        console.log(`Error occured in : ${err.details[0].context.label}\nError description : ${err.details[0].message}`)
        throw err
    }

}

module.exports = {
    addUser
}