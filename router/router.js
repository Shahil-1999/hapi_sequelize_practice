const controller = require('../controller/app.one-to-one-relation')
const validator = require('../validator/one-to-one-relation')
const router = [
    // Assuming controller, validator, and plugins are properly defined
    {
      method: "POST",
      path: "/addUser",
      options: {
        description: 'User Add (Token not required for this endpoint)',
        notes: 'User can Add themselves',
        tags: ['api'],
        handler: controller.User,
        validate: validator.addUser
      }
    }
  ]
  
  module.exports = router;