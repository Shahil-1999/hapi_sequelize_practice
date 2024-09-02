const user = require('../models/app.user');
const profile = require('../models/app.profile');
const { USERADDED200 } = require('../status-code/one-to-one-relation');
const { SERVER500 } = require('../status-code/internal-error');

async function User(req, res) {
    try {
        const { name } = req.payload;
        await user.create({
            name
        });
        console.log(USERADDED200);
        return res.response(USERADDED200); // Send success response
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.response(SERVER500); // Send error response
    }
}

module.exports = {
    User
};
